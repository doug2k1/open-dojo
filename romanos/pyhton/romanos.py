class Romanos():

    def converter_numero(self, numero):
        lista = {1: 'I', 5:'V', 10:'X', 50:'L', 100:'C', 500: 'D', 1000: 'M'}

        if numero in lista.keys():
            return lista[numero]

        listaInvertida = sorted(lista.items(), reverse=True)

        for arabico,romano in listaInvertida:
            inteiro = numero /

