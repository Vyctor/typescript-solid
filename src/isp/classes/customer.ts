import { EnterpriseCustomerProtocol, IndividualCustomerProtocol, CustomerOrder } from './interfaces/customer-protocol';

export class IndividualCustomer implements IndividualCustomerProtocol, CustomerOrder {
  public firstName: string;
  public lastName: string;
  public cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }

  getName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  getIDN(): string {
    return this.cpf;
  }
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol, CustomerOrder {
  public nomeFantasia: string;
  public razaoSocial: string;
  public cnpj: string;

  constructor(nomeFantasia: string, razaoSocial: string, cnpj: string) {
    this.nomeFantasia = nomeFantasia;
    this.razaoSocial = razaoSocial;
    this.cnpj = cnpj;
  }

  getName(): string {
    return this.razaoSocial + ' - ' + this.nomeFantasia;
  }

  getIDN(): string {
    return this.cnpj;
  }
}
