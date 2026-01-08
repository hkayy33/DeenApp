using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DeenTutorFinderApi.Migrations
{
    /// <inheritdoc />
    public partial class AddCurrencySymbol : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CurrencySymbol",
                table: "Tutors",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CurrencySymbol",
                table: "Tutors");
        }
    }
}
