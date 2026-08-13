function calcularSalario(salario, bonus) {
    let valorBonus = salario * bonus / 100 ;
    let salarioFinal = salario + valorBonus;

    return salarioFinal;
}
 let salario = calcularSalario(6000, 50);
 console.log(`Salario final: R$ ${salario}`)