using Microsoft.Extensions.Configuration;
using WorkWise.Application.Repositories;
using WorkWise.Domain.Entities;
using System.Data.SqlClient;
using System.Data;

namespace WorkWise.Infrastructure.Repositories;

public class DepartmentRepository:IDepartmentRepository
{
    private readonly string? _connectionString;

    public DepartmentRepository(IConfiguration configuration)
    {
        _connectionString= configuration.GetConnectionString("DefaultConnection");
    }

    public IEnumerable<Department> GetAll()
    {
        var departments = new List<Department>();

        using var connection = new SqlConnection(_connectionString);
        var command = new SqlCommand("SELECT * FROM Departments", connection);
        connection.Open();

        using var reader = command.ExecuteReader();
        while (reader.Read())
        {
            departments.Add(new Department
            {
                Id = (Guid)reader["Id"],
                Code = reader["Code"].ToString(),
                Name = reader["Name"].ToString()
            });
        }

        return departments;
    }

    public Guid Create(Department department)
    {
        department.Id = Guid.NewGuid();
        using var connection = new SqlConnection(_connectionString);
        var command = new SqlCommand("INSERT INTO Departments (Id,Code,Name) OUTPUT INSERTED.Id VALUES (@id, @code, @name)", connection);
        command.Parameters.AddWithValue("@id", department.Id);
        command.Parameters.AddWithValue("@code", department.Code);
        command.Parameters.AddWithValue("@name", department.Name);

        connection.Open();
        return (Guid)command.ExecuteScalar();
    }

    public void Update(Department department)
    {
        using var connection = new SqlConnection(_connectionString);
        var command = new SqlCommand("UPDATE Departments SET Code = @code, Name = @name WHERE Id = @id", connection);
        command.Parameters.AddWithValue("@id", department.Id);
        command.Parameters.AddWithValue("@code", department.Code);
        command.Parameters.AddWithValue("@name", department.Name);
        connection.Open();
        command.ExecuteNonQuery();
    }

    public void Delete(Guid departmentId)
    {
        using var connection = new SqlConnection(_connectionString);
        var command = new SqlCommand("DELETE FROM Departments WHERE Id = @id", connection);
        command.Parameters.AddWithValue("@id", departmentId);
        connection.Open();
        command.ExecuteNonQuery();
    }
}