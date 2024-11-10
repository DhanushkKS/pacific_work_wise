using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using WorkWise.Application.Repositories;
using WorkWise.Domain.Entities;

namespace WorkWise.Infrastructure.Repositories;

public class EmployeeRepository:IEmployeeRepository
{
    private readonly string? _connectionString;

    public EmployeeRepository(IConfiguration configuration)
    {
        _connectionString= configuration.GetConnectionString("DefaultConnection");
    }

    public IEnumerable<Employee> GetAll()
    {
        var employees = new List<Employee>();

        using var connection = new SqlConnection(_connectionString);
        var command = new SqlCommand("SELECT * FROM Employees", connection);
        connection.Open();

        using var reader = command.ExecuteReader();
        while (reader.Read())
        {
            employees.Add(new Employee
            {
                Id = (Guid)reader["Id"],
                FirstName = reader["FirstName"].ToString(),
                LastName = reader["LastName"].ToString(),
                Email = reader["Email"].ToString(),
                Age = Convert.ToInt32(reader["Age"]),
                DateOfBirth = (DateTime)reader["DateOfBirth"],
                Salary = (decimal)reader["Salary"],
                DepartmentId = (Guid)reader["DepartmentId"]
            });
        }

        return employees;
    }

    public Guid Create(Employee employee)
    {
        employee.Id = Guid.NewGuid();
        using var connection = new SqlConnection(_connectionString);
        var command = new SqlCommand(
            "INSERT INTO Employees (Id, FirstName, LastName, Email, DateOfBirth,Age, Salary, DepartmentId) OUTPUT INSERTED.Id VALUES (@id, @firstName, @lastName, @Email, @dob,@age, @salary, @deptId)", 
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

    public void Update(Employee employee)
    {
        using var connection = new SqlConnection(_connectionString);
        var command = new SqlCommand(
            "UPDATE Employees SET FirstName = @firstName, LastName = @lastName, Email = @Email, DateOfBirth = @dob,Age=@age, Salary = @salary, DepartmentId = @deptId WHERE EmployeeId = @id", 
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
        command.ExecuteNonQuery();
    }

    public void Delete(Guid id)
    {
        using (var connection = new SqlConnection(_connectionString))
        {
            var command = new SqlCommand("DELETE FROM Employees WHERE Id = @id", connection);
            command.Parameters.AddWithValue("@id", id);
            connection.Open();
            command.ExecuteNonQuery();
        }
    }
}