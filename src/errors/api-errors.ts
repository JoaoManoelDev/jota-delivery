export class ApiError extends Error {
  public readonly message: string

  public readonly statusCode: number

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

/*
  O método Error.captureStackTrace é um método estático do objeto
  Error que permite personalizar a pilha de rastreamento de um
  objeto de erro. Ele permite que você capture a pilha de chamadas
  que levou à exceção e armazene-a em um objeto de erro para referência
  futura. Isso pode ser útil para fornecer informações adicionais sobre
  o contexto em que o erro ocorreu.
*/