using API.Models;
using Microsoft.AspNetCore.Mvc;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDataContext>();
var app = builder.Build();

app.MapGet("/", () => "Lista de coisas para fazer");

app.MapPost("/api/tarefas/cadastrar", ([FromBody] Tarefa tarefa,
 [FromServices] AppDataContext ctx) =>
{
    ctx.Tarefas.Add(tarefa);
    ctx.SaveChanges();
    return Results.Created("", tarefa);
}
);

app.MapGet("/api/tarefas/buscar/{id}",([FromRoute] int id,
 [FromServices] AppDataContext ctx) =>
{
    Tarefa? tarefa = ctx.Tarefas.Find(id);
    if (tarefa is not null)
    {
        return Results.Ok(tarefa);
    }
    return Results.NotFound();
}
);

app.MapGet("/api/tarefas/listar", ([FromServices] AppDataContext ctx) =>
{
    if (ctx.Tarefas.Any())
    {
        return Results.Ok(ctx.Tarefas.ToList());
    }
    return Results.NotFound();
}
);

app.MapDelete("/api/tarefas/deletar/{id}",([FromRoute] int id,
 [FromServices] AppDataContext ctx) =>
{
    Tarefa? tarefa = ctx.Tarefas.Find(id);
    if (tarefa is not null)
    {
        ctx.Tarefas.Remove(tarefa);
        ctx.SaveChanges();
        return Results.Ok(tarefa);
    }
    return Results.NotFound();
}
);

app.MapPut("/api/tarefas/alterar/{id}",([FromRoute] int id,

[FromBody] Tarefa tarefaAlterada,
 [FromServices] AppDataContext ctx) =>
{
    Tarefa? tarefa = ctx.Tarefas.Find(id);
    if (tarefa is not null)
    {
        tarefa.Nome = tarefaAlterada.Nome;
        ctx.Tarefas.Update(tarefa);
        ctx.SaveChanges();
        return Results.Ok(tarefa);
    }
    return Results.NotFound();
}
);

app.Run();
 