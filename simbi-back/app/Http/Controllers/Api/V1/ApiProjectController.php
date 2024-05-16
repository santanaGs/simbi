<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;

/** 
 *@OA\Info(
 *   title="Simbi Api",
 *   version="1.0.1"
 *) 
 */

class ApiProjectController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/projects",
     *     summary="Listar apenas 20 projetos para contruçao do carrossel",
     *     operationId="getProjects",
     *     tags={"Projects"},
     *     @OA\Response(
     *         response=200,
     *         description="List only 20 projects",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(
     *                 @OA\Property(property="nome", type="string"),
     *                 @OA\Property(property="municipio", type="string"),
     *                 @OA\Property(property="uf", type="string"),
     *                 @OA\Property(property="resumo", type="string"),
     *                 @OA\Property(property="valor_aprovado", type="string"),
     *                 @OA\Property(property="valor_captado", type="string")
     *             )
     *         )
     *     )
     * )
     */

    public function index()
    {
        return Project::take(20)->get(['nome', 'municipio', 'uf', 'resumo', 'valor_aprovado', 'valor_captado']);
    }

    /**
     * @OA\Get(
     *     path="/api/projects/all",
     *     summary="Listar todos os projetos com detalhes",
     *     operationId="getAllProjects",
     *     tags={"Projects"},
     *     @OA\Response(
     *         response=200,
     *         description="Lista de projetos com detalhes",
     *     )
     * )
     */
    public function getAll()
    {
        return Project::all();
    }

    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
