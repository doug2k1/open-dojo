class ProdutoEscalar():
    def calcular(self, A, B):

        result = 0
        for i in range(0, len(A)):
            result += A[i] * B[i]


        if result < 0:
            return [result, "obtuso"]
        elif result == 0:
            return [result, "reto"]
        else:
            return [result, "agudo"]

