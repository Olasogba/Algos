public class SystemRoles
{
    public const string OrganizationAdmin = "Organization Admin";
    public const string TevetInstituteRector = "Institute Rector";
    public const string TevetInstituteExamsAndRecordsAdmin = "Institute Exams and Records Admin";
}


var systemRoles = typeof(SystemRoles).GetFields().Select(c => c.GetValue(null));

foreach (var item in systemRoles)
{
    Console.WriteLine(item);
}