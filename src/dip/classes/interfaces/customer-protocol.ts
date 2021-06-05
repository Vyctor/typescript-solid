export interface CustomerOrderProtocol {
  getName(): string;
  getIDN(): string;
}

export interface IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  razaoSocial: string;
  nomeFantasia: string;
  cnpj: string;
}
