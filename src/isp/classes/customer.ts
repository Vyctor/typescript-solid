import { EnterpriseCustomerProtocol, IndividualCustomerProtocol } from './interfaces/customer-protocol';

export class IndividualCustomer implements IndividualCustomerProtocol {
  public firstName: string;
  public lastName: string;
  public cpf: string;
  public cnpj: string;

  constructor(firstName: string, lastName: string, cpf: string, cnpj: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
    this.cnpj = cnpj;
  }
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol {
  public nomeFantasia: string;
  public razaoSocial: string;
  public cnpj: string;

  constructor(nomeFantasia: string, razaoSocial: string, cnpj: string) {
    this.nomeFantasia = nomeFantasia;
    this.razaoSocial = razaoSocial;
    this.cnpj = cnpj;
  }
}
