using Microsoft.Extensions.Configuration;
using WorkWise.Application.Repositories;
using WorkWise.Domain.Entities;
using System.Data.SqlClient;
using System.Data;

namespace WorkWise.Infrastructure.Repositories;

public class DepartmentRepository : IDepartmentRepository
{
    private readonly string? _connectionString;

    public DepartmentRepository(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("DefaultConnection") 
                            ?? throw new InvalidOperationException("Connection string 'DefaultConnection' is missing.");
    }

    //For async await, use Task... as return type
    public  IEnumerable<Department> GetAll()
    {
        var departments = new List<Department>();

        try
        {
            using var connection = new SqlConnection(_connectionString);
            var command = new SqlCommand("SELECT * FROM Departments", connection);
            connection.Open();

            using var reader = command.ExecuteReader();
            while (reader.Read())
            {
                departments.Add(new Department
                {
                    Id = reader["Id"] is Guid ? (Guid)reader["Id"] : Guid.Empty,
                    Code = reader["Code"]?.ToString(),
                    Name = reader["Name"]?.ToString()
                });
            }
        }
        catch (Exception ex)
        {
            throw new Exception("An error occurred while retrieving departments.", ex);
        }

        return departments;
    }

    public Department? GetById(Guid id)
    {
        if (id == Guid.Empty) throw new ArgumentException("Invalid department ID.");

        try
        {
            using var connection = new SqlConnection(_connectionString);
            var command = new SqlCommand("SELECT * FROM Departments WHERE Id = @Id", connection);
            command.Parameters.AddWithValue("@Id", id);

            connection.Open();
            using var reader = command.ExecuteReader();

            if (reader.Read())
            {
                return new Department
                {
                    Id = reader["Id"] as Guid? ?? Guid.Empty,
                    Code = reader["Code"]?.ToString(),
                    Name = reader["Name"]?.ToString()
                };
            }
        }
        catch (Exception ex)
        {
            throw new Exception($"An error occurred while retrieving the department with ID {id}.", ex);
        }

        return null; 
    }

    public Guid Create(Department department)
    {
        ArgumentNullException.ThrowIfNull(department);
        if (string.IsNullOrWhiteSpace(department.Code) || string.IsNullOrWhiteSpace(department.Name))
            throw new ArgumentException("Department Code and Name are required.");

        department.Id = Guid.NewGuid();
        try
        {
            using var connection = new SqlConnection(_connectionString);
            var command = new SqlCommand(
                "INSERT INTO Departments (Id, Code, Name) OUTPUT INSERTED.Id VALUES (@id, @code, @name)",
                connection);
            command.Parameters.AddWithValue("@id", department.Id);
            command.Parameters.AddWithValue("@code", department.Code);
            command.Parameters.AddWithValue("@name", department.Name);

            connection.Open();
            return (Guid)command.ExecuteScalar();
        }
        catch (Exception ex)
        {
            throw new Exception("An error occurred while creating the department.", ex);
        }
    }

    public void Update(Department department)
    {
        ArgumentNullException.ThrowIfNull(department);
        if (department.Id == Guid.Empty)
            throw new ArgumentException("Invalid department ID.");
        if (string.IsNullOrWhiteSpace(department.Code) || string.IsNullOrWhiteSpace(department.Name))
            throw new ArgumentException("Department Code and Name are required.");

        try
        {
            using var connection = new SqlConnection(_connectionString);
            var command = new SqlCommand("UPDATE Departments SET Code = @code, Name = @name WHERE Id = @id", connection);
            command.Parameters.AddWithValue("@id", department.Id);
            command.Parameters.AddWithValue("@code", department.Code);
            command.Parameters.AddWithValue("@name", department.Name);
            
            connection.Open();
            var rowsAffected = command.ExecuteNonQuery();
            if (rowsAffected == 0)
            {
                throw new Exception($"No department found with ID {department.Id} to update.");
            }
        }
        catch (Exception ex)
        {
            
            throw new Exception($"An error occurred while updating the department with ID {department.Id}.", ex);
        }
    }

    public void Delete(Guid departmentId)
    {
        if (departmentId == Guid.Empty) throw new ArgumentException("Invalid department ID.");

        try
        {
            using var connection = new SqlConnection(_connectionString);
            var command = new SqlCommand("DELETE FROM Departments WHERE Id = @id", connection);
            command.Parameters.AddWithValue("@id", departmentId);

            connection.Open();
            int rowsAffected = command.ExecuteNonQuery();
            if (rowsAffected == 0)
            {
                throw new Exception($"No department found with ID {departmentId} to delete.");
            }
        }
        catch (Exception ex)
        {
            
            throw new Exception($"An error occurred while deleting the department with ID {departmentId}.", ex);
        }
    }
}
