using Google.Protobuf; 
using Google.Protobuf.WellKnownTypes; 
using Grpc.Course.Protobuf.Test; 

Console.WriteLine("Welcomen to Protobuf Test"); 
var emp = new Employee(); 

emp.FirstName = "John"; 
emp.LastName = "Doe"; 
emp.IsRetired = false; 
var birthdate = new DateTime(1967,12,3);
birthdate = DateTime.SpecifyKind(birthdate, DateTimeKind.Utc);
emp.BirthDate = Timestamp.FromDateTime(birthdate);
emp.Age = 42;
emp.MaritalStatus=Employee.Types.MaritalStatus.Married; 
emp.PreviousEmployers.Add("Microsoft"); 
emp.PreviousEmployers.Add("Hp"); 
emp.CurrentAddress = new Address(); 
emp.CurrentAddress.City = "New York"; 
emp.CurrentAddress.StreetName="5th avenue"; 
emp.CurrentAddress.HouseNumber=42; 
emp.Relatives.Add("Father", "John"); 
emp.Relatives.Add("Mother", "Ione"); 
emp.Relatives.Add("Brother", "Juan"); 

using(var output=File.Create("emp.dat"))
{
    emp.WriteTo(output);
    Console.WriteLine("Protobuf output complete");
}
Employee empFromFile; 
using (var input = File.OpenRead("emp.dat"))
{
    empFromFile= Employee.Parser.ParseFrom(input);
    
}

Console.WriteLine("Protobuf test complete");