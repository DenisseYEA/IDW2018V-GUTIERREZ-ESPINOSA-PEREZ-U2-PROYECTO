var fs = require('fs');
readline = require('readline');
var i = 0;
var registro = {
}

var registros = new Array();

fs.writeFileSync('ARCHIVO REINSC SCOTIABANK.txt', 'TIPO|CONTRATO|NOMBRE PLAZA|NUMERO PLAZA|NUMERO SUCURSAL|FECHA RECIBO|FECHA DE PAGO|FECHA DEPOSITO|IND IMPORTE|IMPORTE DOCUMENTO|FORMA DE PAGO|INTERESES O DESCUENTOS|IMPORTE INTERESES O DESCUENTOS|IMPORTE TOTAL PAGADO|HORA DE PAGO|                            TOTAL A PAGAR| NUMERO DE REFERENCIA| FECHA LIMITE DE PAGO| NOMBRE| CONCEPTO DE PAGO|CTE. COB. LITE|IND. ORIGEN|'+'\n')
var data = readline.createInterface({
    input: fs.createReadStream('BANCO NUEVO.TXT'),
    console: false
});
data.on('line', function (line) {
    var separarLine = line.split("\n")
    registro = {
        tipo: 'D|',
        contrato: '00001659|',
        nombreplaza: 'TEPIC, NAY.   |',
        numeroplaza: '014|',
        numerosucursal: '002|',
        fecharecibo: '',
        fechapago: '',
        fechadeposito: '',
        indimporte: '',
        importedocumento: '            $2,500.00|',
        formadepago: '001|',
        interesodescuentos: '   |',
        importeinteresodescuentos: '                $0.00|',
        importetotalpagado: '            $2,500.00|',
        horadepago: '',
        totalapagar: '000000000250000|',
        numerodereferencia: '100015401240L04002250033637C02|',
        fechalimitedepago: '16012018|',
        nombre: 'EDSON OMAR GALVAN JIMENEZ     |',
        conceptodepago: 'REINSCRIPCION                 ||',
        ctecoblite: '                                                                                                                                                                                                                                                                                                             000000000000000|',
        indorigen: '1|'
    }
    var regis = separarLine + "";
    //registro.numeroplaza = regis.substring(1,16);
    //registro.numerosucursal = regis.substring(29, 32);
    registro.fecharecibo = regis.substring(17, 24)+'|';
    registro.fechapago = regis.substring(17, 24)+'|';
    registro.fechadeposito = regis.substring(17, 24)+'|';
    registro.indimporte = regis.substring(77, 78)+'|';
    //importedocumento: '',
    //formadepago: '',
    //interesodescuentos: '',
    //importeinteresodescuentos: '',
    //importetotalpagado: '',
    registro.horadepago = regis.substring(24, 26)+':'+regis.substring(26, 28)+'|';
    //totalapagar:'',
    //registro.numerodereferencia = regis.substring(106, 113);
    //fechalimitedepago:'',
    registro.nombre = regis.substring(154,184)+'|';
    //conceptodepago:'',
    //ctecoblite:'',
    //indorigen:''

    registros.push(registro);


    /*console.log(registros[i]["tipo"]+registros[i]["contrato"]+registros[i]["nombreplaza"]+
    registros[i]["numeroplaza"]+registros[i]["numerosucursal"]+registros[i]["fecharecibo"]+
    registros[i]["fechapago"]+registros[i]["fechadeposito"]+registros[i]["indimporte"]+
    registros[i]["importedocumento"]+registros[i]["formadepago"]+registros[i]["interesodescuentos"]+
    registros[i]["importeinteresodescuentos"]+registros[i]["importetotalpagado"]+
    registros[i]["horadepago"]+registros[i]["totalapagar"]+registros[i]["numerodereferencia"]+
    registros[i]["fechalimitedepago"]+registros[i]["nombre"]+registros[i]["conceptodepago"]+
    registros[i]["ctecoblite"]+registros[i]["indorigen"]+'\n');*/

    fs.appendFile('ARCHIVO REINSC SCOTIABANK.txt',registros[i]["tipo"]+registros[i]["contrato"]+registros[i]["nombreplaza"]+
    registros[i]["numeroplaza"]+registros[i]["numerosucursal"]+registros[i]["fecharecibo"]+
    registros[i]["fechapago"]+registros[i]["fechadeposito"]+registros[i]["indimporte"]+
    registros[i]["importedocumento"]+registros[i]["formadepago"]+registros[i]["interesodescuentos"]+
    registros[i]["importeinteresodescuentos"]+registros[i]["importetotalpagado"]+
    registros[i]["horadepago"]+registros[i]["totalapagar"]+registros[i]["numerodereferencia"]+
    registros[i]["fechalimitedepago"]+registros[i]["nombre"]+registros[i]["conceptodepago"]+
    registros[i]["ctecoblite"]+registros[i]["indorigen"]+'\n', (err) => {
        if (err)
            throw err;
    })
    i++;
});









