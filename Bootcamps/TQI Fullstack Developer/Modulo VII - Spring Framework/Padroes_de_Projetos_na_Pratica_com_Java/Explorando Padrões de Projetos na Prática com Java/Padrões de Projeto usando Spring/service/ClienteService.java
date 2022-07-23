package one.digitalinnovation.gof.service;

import one.digitalinnovation.gof.model.Cliente;
 
public interface ClienteService {

	IterableCliente buscarTodos();

	Cliente buscarPorId(Long id);

	void inserir(Cliente cliente);

	void atualizar(Long id, Cliente cliente);

	void deletar(Long id);

}