var fs = require('fs');
readline = require('readline');
var i = 0;
var registro = {
}

var registros = new Array();

fs.writeFileSync('ARCHIVO REINSC SCOTIABANK.txt', 'TIPO|CONTRATO|NOMBRE PLAZA|NUMERO PLAZA|NUMERO SUCURSAL|FECHA RECIBO|FECHA DE PAGO|FECHA DEPOSITO|IND IMPORTE|IMPORTE DOCUMENTO|FORMA DE PAGO|INTERESES O DESCUENTOS|IMPORTE INTERESES O DESCUENTOS|IMPORTE TOTAL PAGADO|HORA DE PAGO|                            TOTAL A PAGAR| NUMERO DE REFERENCIA| FECHA LIMITE DE PAGO| NOMBRE| CONCEPTO DE PAGO|CTE. COB. LITE|IND. ORIGEN|' + '\n')
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
    registro.fecharecibo = regis.substring(16, 18) + '/' + regis.substring(18, 20) + '/' + regis.substring(20, 24) + '|';
    registro.fechapago = regis.substring(16, 18) + '/' + regis.substring(18, 20) + '/' + regis.substring(20, 24) + '|';
    registro.fechadeposito = regis.substring(16, 18) + '/' + regis.substring(18, 20) + '/' + regis.substring(20, 24) + '|';
    registro.indimporte = regis.substring(77, 78) + '|';
    var importn = "";
    if ('0' == regis.substring(78, 79)) {
        if ('0' == regis.substring(79, 80)) {
            if ('0' == regis.substring(80, 81)) {
                if ('0' == regis.substring(81, 82)) {
                    if ('0' == regis.substring(82, 83)) {
                        if ('0' == regis.substring(83, 84)) {
                            if ('0' == regis.substring(84, 85)) {
                                if ('0' == regis.substring(85, 86)) {
                                    if ('0' == regis.substring(86, 87)) {
                                        if ('0' == regis.substring(87, 88)) {
                                            if ('0' == regis.substring(88, 89)) {
                                                if ('0' == regis.substring(89, 90)) {
                                                    if ('0' == regis.substring(90, 91)) {
                                                        importn = '$            ' + regis.substring(90, 91);
                                                    } else {
                                                        importn = '$            ' + regis.substring(90, 91);
                                                    }
                                                } else {
                                                    importn = '$           ' + regis.substring(89, 91);
                                                }
                                            } else {
                                                importn = '$          ' + regis.substring(88, 91);
                                            }
                                        } else {
                                            importn = '$         ' + regis.substring(87, 91);
                                        }
                                    } else {
                                        importn = '$        ' + regis.substring(86, 91);
                                    }
                                } else {
                                    importn = '$       ' + regis.substring(85, 91);
                                }
                            } else {
                                importn = '$      ' + regis.substring(84, 91);
                            }
                        } else {
                            importn = '$     ' + regis.substring(83, 91);
                        }
                    } else {
                        importn = '$    ' + regis.substring(82, 91);
                    }
                } else {
                    importn = '$   ' + regis.substring(81, 91);
                }
            } else {
                importn = '$  ' + regis.substring(80, 91);
            }
        } else {
            importn = '$ ' + regis.substring(79, 91);
        }
    } else {
        importn = regis.substring(78, 91);
    }
    registro.importedocumento = importn + '.' + regis.substring(91, 93) + '|';
    registro.importetotalpagado = importn + '.' + regis.substring(91, 93) + '|';
    registro.horadepago = regis.substring(24, 26) + ':' + regis.substring(26, 28) + '|';
    registro.totalapagar = regis.substring(78, 93) + '|';
    registro.numerodereferencia = regis.substring(106, 136) + '|';
    registro.nombre = regis.substring(154, 184) + '|';

    registros.push(registro);



    fs.appendFile('ARCHIVO REINSC SCOTIABANK.txt', registros[i]["tipo"] + registros[i]["contrato"] + registros[i]["nombreplaza"] +
        registros[i]["numeroplaza"] + registros[i]["numerosucursal"] + registros[i]["fecharecibo"] +
        registros[i]["fechapago"] + registros[i]["fechadeposito"] + registros[i]["indimporte"] +
        registros[i]["importedocumento"] + registros[i]["formadepago"] + registros[i]["interesodescuentos"] +
        registros[i]["importeinteresodescuentos"] + registros[i]["importetotalpagado"] +
        registros[i]["horadepago"] + registros[i]["totalapagar"] + registros[i]["numerodereferencia"] +
        registros[i]["fechalimitedepago"] + registros[i]["nombre"] + registros[i]["conceptodepago"] +
        registros[i]["ctecoblite"] + registros[i]["indorigen"] + '\n', (err) => {
            if (err)
                throw err;
        })
    i++;
});









