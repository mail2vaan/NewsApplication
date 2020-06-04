import toastr from 'toastr';

export default function assets() {
    toastr.options = { preventDuplicates: true };
    return loadExternalLibraries();
}
  
function loadExternalLibraries(){
    require('../../node_modules/jquery/dist/jquery.js');
    require('../../node_modules/bootstrap/dist/js/bootstrap.js');
    require('../../node_modules/bootstrap/dist/css/bootstrap.css');
    require('../../node_modules/toastr/build/toastr.min.css');
}
