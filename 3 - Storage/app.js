/**
 * Variáveis com referencias dos inputs
 */
var fileInput = document.getElementById('file-input');
var stringInput = document.getElementById('string-input');

/**
 * Referencia para o storage do firebase criando uma pasta com o nome de arquivos.
 */
// COMENTANDO SCRIPT ORIGINAL DO CURSO
// var ref = firebase.storage().ref('arquivos'); 
// /**
//  * Metodo que observa mudanças no input de arquivo
//  */
// fileInput.onchange = function (event) {
//     var arquivo = event.target.files[0];

//     /**
//      * .child(nome):  Acessar o caminho para inserir o arquivo.
//      * .put(arquivo): Vai inserir o arquivo
//      */
//     ref.child('arquivo').put(arquivo).then(snapshot => {
//         console.log('snapshot', snapshot);
//         /**
//          * .getdownloadURL() - retorna a url para download/apresentação desse arquivo enviado.
//          */
//         ref.child('arquivo').getDownloadURL().then(url => {
//             console.log('string para download', url);
//         });
//     });
// }
// SCRIPT PARA TESTAR ENVIO AO PROJETOHC

var ref = firebase.storage().ref('certificados'); 
/**
 * Metodo que observa mudanças no input de arquivo
 */
fileInput.onchange = function (event) {
    var arquivo = event.target.files[0];

    /**
     * .child(nome):  Acessar o caminho para inserir o arquivo.
     * .put(arquivo): Vai inserir o arquivo
     */
    ref.child('20731356_data').put(arquivo).then(snapshot => {
        console.log('snapshot', snapshot);
        /**
         * .getdownloadURL() - retorna a url para download/apresentação desse arquivo enviado.
         */
        ref.child('20731356_data').getDownloadURL().then(url => {
            console.log('string para download', url);
        });
    });

}

/**
 * Metodo que observa mudanças no input de string
 */
stringInput.onchange = function (event) {
    var arquivo = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(arquivo);
    reader.onload = function() {
        //console.log(reader.result);
        const base64 = reader.result.split('base64,')[1];

        /**
         * .putString(string, formato, metadados) - Salva uma string no firebase e eu posso colocar um 
         * formato de imagem para que ele automaticamente converta para um png
         */

        ref.child('imagem').putString(base64, 'base64', {contentType: 'image/png'}).then(snapshot => {
            //console.log('snapshot', snapshot);

            ref.child('imagem').getDownloadURL().then(url => {
                console.log('string para download', url);
            });
        });

        
        
    }

}