"""
Calculadora Simples
Um programa básico de calculadora para demonstrar conceitos fundamentais de Python.
"""

def adicao(a, b):
    """Retorna a soma de dois números."""
    return a + b

def subtracao(a, b):
    """Retorna a subtração de dois números."""
    return a - b

def multiplicacao(a, b):
    """Retorna a multiplicação de dois números."""
    return a * b

def divisao(a, b):
    """Retorna a divisão de dois números."""
    if b == 0:
        return "Erro: Divisão por zero não é permitida!"
    return a / b

def obter_numero(mensagem):
    """Obtém um número válido do usuário."""
    while True:
        try:
            return float(input(mensagem))
        except ValueError:
            print("Por favor, digite um número válido!")

def exibir_menu():
    """Exibe o menu de opções."""
    print("\n" + "="*40)
    print("        CALCULADORA SIMPLES")
    print("="*40)
    print("Escolha a operação:")
    print("1. Adição (+)")
    print("2. Subtração (-)")
    print("3. Multiplicação (×)")
    print("4. Divisão (÷)")
    print("5. Sair")
    print("="*40)

def main():
    """Função principal que executa a calculadora."""
    print("Bem-vindo à Calculadora Simples!")
    
    while True:
        exibir_menu()
        
        escolha = input("\nDigite sua escolha (1-5): ")
        
        if escolha == '5':
            print("\nObrigado por usar a Calculadora Simples!")
            print("Até logo! 👋")
            break
        
        if escolha not in ['1', '2', '3', '4']:
            print("\n❌ Opção inválida! Por favor, escolha entre 1 e 5.")
            continue
        
        # Obtém os números do usuário
        num1 = obter_numero("\nDigite o primeiro número: ")
        num2 = obter_numero("Digite o segundo número: ")
        
        # Executa a operação escolhida
        if escolha == '1':
            resultado = adicao(num1, num2)
            print(f"\n✅ Resultado: {num1} + {num2} = {resultado}")
        elif escolha == '2':
            resultado = subtracao(num1, num2)
            print(f"\n✅ Resultado: {num1} - {num2} = {resultado}")
        elif escolha == '3':
            resultado = multiplicacao(num1, num2)
            print(f"\n✅ Resultado: {num1} × {num2} = {resultado}")
        elif escolha == '4':
            resultado = divisao(num1, num2)
            if isinstance(resultado, str):  # Erro de divisão por zero
                print(f"\n❌ {resultado}")
            else:
                print(f"\n✅ Resultado: {num1} ÷ {num2} = {resultado}")
        
        input("\nPressione ENTER para continuar...")

if __name__ == "__main__":
    main()
