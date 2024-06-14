using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace desafio_fullstack_khipo_backend.Migrations
{
    /// <inheritdoc />
    public partial class UpdateLocalRelationships : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Catracas_Locais_LocalId",
                table: "Catracas");

            migrationBuilder.DropForeignKey(
                name: "FK_Entradas_Locais_LocalId",
                table: "Entradas");

            migrationBuilder.AddForeignKey(
                name: "FK_Catracas_Locais_LocalId",
                table: "Catracas",
                column: "LocalId",
                principalTable: "Locais",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Entradas_Locais_LocalId",
                table: "Entradas",
                column: "LocalId",
                principalTable: "Locais",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Catracas_Locais_LocalId",
                table: "Catracas");

            migrationBuilder.DropForeignKey(
                name: "FK_Entradas_Locais_LocalId",
                table: "Entradas");

            migrationBuilder.AddForeignKey(
                name: "FK_Catracas_Locais_LocalId",
                table: "Catracas",
                column: "LocalId",
                principalTable: "Locais",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Entradas_Locais_LocalId",
                table: "Entradas",
                column: "LocalId",
                principalTable: "Locais",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
