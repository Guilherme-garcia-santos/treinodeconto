using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDataContext>();
var app = builder.Build();

app.MapGet("/", () => "Prova A1");

//End Points de Categoria
app.MapGet("Categoria/listar", ([FromServices] AppDataContext ctx) =>
{
    if(ctx.Categorias.Any())
    {
        return Results.Ok(ctx.Categorias.ToList());
    }
    return Results.NotFound("Nenhuma categoria encontrada");
});

app.MapPost("Categoria/cadastrar", ([FromServices] AppDataContext ctx,
    [FromRoute] string id) =>
{
    ctx.Categorias.Add(categoria);
    ctx.SaveChanges();
    return Results.Created("", categoria);
});

// End points Tarefa
app.MapGet("tarefas/listar", ([FromServices] AppDataContext ctx) =>
{
    if(ctx.Tarefas.Any())
    {
        return Results.Ok(ctx.Tarefas.ToList());
    }
    return Results.NotFound("Nenhuma tarefa encontrada");
});

app.MapPost("tarefas/cadastrar", ([FromServices] AppDataContext ctx,
    [FromRoute] string id) =>
{
    Categoria? categoria = ctx.Categorias.Find(tarefa.categoriaId);
    if(categoria = null)
    {
        return Results.NotFound("Categoria não encontrada");
    }
    Tarefa.Categoria = categoria;
    ctx.Tarefas.Add(tarefa);
    ctx.SaveChanges();
    return Results.Created("", tarefa);
});

// PUT 
app.MapPut("/tarefas/alterar{id}", ([FromServices] AppDataContext ctx,
    [FromRoute] string id)=>
    {
     if(tarefa is null)
        {
            return Results.NotFound("Tarefa não encontrada");
        }
        if(tarefa.Status = "Não iniciada")
        {
            tarefa.Status = "Em Andamento";
        }else if (tarefa.Status = "Em andamento")
        {
            tarefa.Status = "Concluida";
        }
        ctx.Tarefas.Update(tarefa);
        ctx.SaveChanges();
        return Results.Ok(ctx.Tarefas.ToList());
     });

//GET
app.MapGet("/tarefas/naoconcluidas", ([FromServices] AppDataContext ctx)=>
{
return Results.Ok(ctx.Tarefas.Where(x => x.Status != "Concluida").ToList());
});

//GET
app.MapGet("/tarefas/concluidas", ([FromServices] AppDataContext ctx)=>
{
return Results.Ok(ctx.Tarefas.Where(x => x.Status = "Concluida").ToList());
});

app.Run();
















app.MapGet("/", () => "Lista de coisas para fazer");

// app.MapPost("/api/tarefas/cadastrar", ([FromBody] Tarefa tarefa,
//  [FromServices] AppDataContext ctx) =>
// {
//     ctx.Tarefas.Add(tarefa);
//     ctx.SaveChanges();
//     return Results.Created("", tarefa);
// }
// );

// app.MapGet("/api/tarefas/buscar/{id}",([FromRoute] int id,
//  [FromServices] AppDataContext ctx) =>
// {
//     Tarefa? tarefa = ctx.Tarefas.Find(id);
//     if (tarefa is not null)
//     {
//         return Results.Ok(tarefa);
//     }
//     return Results.NotFound();
// }
// );

// app.MapGet("/api/tarefas/listar", ([FromServices] AppDataContext ctx) =>
// {
//     if (ctx.Tarefas.Any())
//     {
//         return Results.Ok(ctx.Tarefas.ToList());
//     }
//     return Results.NotFound();
// }
// );

// app.MapDelete("/api/tarefas/deletar/{id}",([FromRoute] int id,
//  [FromServices] AppDataContext ctx) =>
// {
//     Tarefa? tarefa = ctx.Tarefas.Find(id);
//     if (tarefa is not null)
//     {
//         ctx.Tarefas.Remove(tarefa);
//         ctx.SaveChanges();
//         return Results.Ok(tarefa);
//     }
//     return Results.NotFound();
// }
// );

// app.MapPut("/api/tarefas/alterar/{id}",([FromRoute] int id,

// [FromBody] Tarefa tarefaAlterada,
//  [FromServices] AppDataContext ctx) =>
// {
//     Tarefa? tarefa = ctx.Tarefas.Find(id);
//     if (tarefa is not null)
//     {
//         tarefa.Nome = tarefaAlterada.Nome;
//         ctx.Tarefas.Update(tarefa);
//         ctx.SaveChanges();
//         return Results.Ok(tarefa);
//     }
//     return Results.NotFound();
// }
// );