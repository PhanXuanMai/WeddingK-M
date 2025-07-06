const response = 'https://web1-aip.heroku.com/aip';
async function LoadData(request,templateId,viewId){
    const response = await fetch('{AIP}/${request}');
    const data = await response.json();

    var source  =document.getElementById("templateId").innerHTML;
    var templeta =Handlebars.compile(source);
    var view =  document.getElementById(viewId);
    var innerHTML = template(context);
    console.log(html);
}
  

