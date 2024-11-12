using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using WorkWise.Application.Repositories;
using WorkWise.Domain.Entities;

namespace WorkWise.Infrastructure.Repositories;

public class EmployeeRepository : IEmployeeRepository
{
    private readonly string? _connectionString;

    public EmployeeRepository(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("DefaultConnection");
    }

    public IEnumerable<Employee> GetAll()
    {
        var employees = new List<Employee>();

        try
        {
            using var connection = new SqlConnection(_connectionString);
            var command = new SqlCommand("SELECT * FROM Employees", connection);
            connection.Open();

            using var reader = command.ExecuteReader();
            while (reader.Read())
            {
                employees.Add(new Employee
                {
                    Id = reader["Id"] is Guid ? (Guid)reader["Id"] : Guid.Empty,
                    FirstName = reader["FirstName"].ToString(),
                    LastName = reader["LastName"].ToString(),
                    Email = reader["Email"].ToString(),
                    Age = reader["Age"] != DBNull.Value ? Convert.ToInt32(reader["Age"]) : 0,
                    DateOfBirth = reader["DateOfBirth"] != DBNull.Value ? (DateTime)reader["DateOfBirth"] : DateTime.MinValue,
                    Salary = reader["Salary"] != DBNull.Value ? (decimal)reader["Salary"] : 0,
                    DepartmentId = reader["DepartmentId"] is Guid ? (Guid)reader["DepartmentId"] : Guid.Empty
                });
            }
        }
        catch (Exception ex)
        {
            throw new Exception("An error occurred while retrieving employees.", ex);
        }

        return employees;
    }

    public Employee GetById(Guid id)
    {
        try
        {
            using var connection = new SqlConnection(_connectionString);
            var command = new SqlCommand("SELECT * FROM Employees WHERE Id = @id", connection);
            command.Parameters.AddWithValue("@id", id);
            connection.Open();

            using var reader = command.ExecuteReader();
            if (reader.Read())
            {
                return new Employee
                {
                    Id = reader["Id"] is Guid ? (Guid)reader["Id"] : Guid.Empty,
                    FirstName = reader["FirstName"].ToString(),
                    LastName = reader["LastName"].ToString(),
                    Email = reader["Email"].ToString(),
                    Age = reader["Age"] != DBNull.Value ? Convert.ToInt32(reader["Age"]) : 0,
                    DateOfBirth = reader["DateOfBirth"] != DBNull.Value ? (DateTime)reader["DateOfBirth"] : DateTime.MinValue,
                    Salary = reader["Salary"] != DBNull.Value ? (decimal)reader["Salary"] : 0,
                    DepartmentId = reader["DepartmentId"] is Guid ? (Guid)reader["DepartmentId"] : Guid.Empty
                };
            }

            throw new Exception("Employee not found.");
        }
        catch (Exception ex)
        {
            throw new Exception("An error occurred while retrieving the employee by ID.", ex);
        }
    }

    public Guid Create(Employee employee)
    {
        try
        {
            employee.Id = Guid.NewGuid();
            using var connection = new SqlConnection(_connectionString);
            var command = new SqlCommand(
                "INSERT INTO Employees (Id, FirstName, LastName, Email, DateOfBirth, Age, Salary, DepartmentId) " +
                "OUTPUT INSERTED.Id VALUES (@id, @firstName, @lastName, @Email, @dob, @age, @salary, @deptId)", 
                connection
            );

            command.Parameters.AddWithValue("@id", employee.Id);
            command.Parameters.AddWithValue("@firstName", employee.FirstName);
            command.Parameters.AddWithValue("@lastName", employee.LastName);
            command.Parameters.AddWithValue("@Email", employee.Email);
            command.Parameters.AddWithValue("@dob", employee.DateOfBirth);
            command.Parameters.AddWithValue("@age", employee.Age);
            command.Parameters.AddWithValue("@salary", employee.Salary);
            command.Parameters.AddWithValue("@deptId", employee.DepartmentId);

            connection.Open();
            return (Guid)command.ExecuteScalar();
        }
        catch (Exception ex)
        {
            throw new Exception("An error occurred while creating the employee.", ex);
        }
    }

    public void Update(Employee employee)
    {
        try
        {
            using var connection = new SqlConnection(_connectionString);
            var command = new SqlCommand(
                "UPDATE Employees SET FirstName = @firstName, LastName = @lastName, Email = @Email, DateOfBirth = @dob, " +
                "Age = @age, Salary = @salary, DepartmentId = @deptId WHERE Id = @id", 
                connection
            );

            command.Parameters.AddWithValue("@id", employee.Id);
            command.Parameters.AddWithValue("@firstName", employee.FirstName);
            command.Parameters.AddWithValue("@lastName", employee.LastName);
            command.Parameters.AddWithValue("@Email", employee.Email);
            command.Parameters.AddWithValue("@dob", employee.DateOfBirth);
            command.Parameters.AddWithValue("@age", employee.Age);
            command.Parameters.AddWithValue("@salary", employee.Salary);
            command.Parameters.AddWithValue("@deptId", employee.DepartmentId);

            connection.Open();
            int rowsAffected = command.ExecuteNonQuery();

            if (rowsAffected == 0)
            {
                throw new Exception("No employee found with the specified ID.");
            }
        }
        catch (Exception ex)
        {
            throw new Exception("An error occurred while updating the employee.", ex);
        }
    }

    public void Delete(Guid id)
    {
        try
        {
            using var connection = new SqlConnection(_connectionString);
            var command = new SqlCommand("DELETE FROM Employees WHERE Id = @id", connection);
            command.Parameters.AddWithValue("@id", id);

            connection.Open();
            int rowsAffected = command.ExecuteNonQuery();

            if (rowsAffected == 0)
            {
                throw new Exception("No employee found with the specified ID.");
            }
        }
        catch (Exception ex)
        {
            throw new Exception("An error occurred while deleting the employee.", ex);
        }
    }
}
