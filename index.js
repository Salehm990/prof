

fetch('https://apidatta.herokuapp.com/Data')
.then(response => response.json())
.then(json => {
    var SM = document.getElementById('SM');
    var OriginalContent = `<div>
          <div class="icon"><i class="F1"></i></div>
          <h4 class="title"><a href="">F2</a></h4>
          <p class="description">F3</p>
        </div>`;
    for(var i=0;i<json.length;i++)
    {
        var MyContent = document.createElement('div');
        var CustomisedContent = OriginalContent;
        CustomisedContent = CustomisedContent.replace('F2',json[i].title);
        CustomisedContent = CustomisedContent.replace('F3',json[i].description);
        CustomisedContent = CustomisedContent.replace('F1',json[i].icon);
        MyContent.className='col-lg-4 col-md-6 icon-box'
        MyContent.innerHTML = CustomisedContent;
        SM.appendChild(MyContent);
    }
})


fetch('https://apidatta.herokuapp.com/skills')
.then(response => response.json())
.then(json => {
    var skills = document.getElementById('skil');
    var OriginalContent = `<div class="progress">
    <div class="progress-bar-wrap">
    <div class="progress-bar" aria-valuenow="100"
    aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>`;
    for(var i=0;i<json.length;i++)
    {
        var MyContent = document.createElement('div');
        var CustomisedContent = OriginalContent;
        CustomisedContent = CustomisedContent.replace('F1',json[i].name);
        CustomisedContent = CustomisedContent.replace('F2',json[i].percentage);
        CustomisedContent = CustomisedContent.replace('F3',json[i].prt);
        MyContent.className='col-lg-4 col-md-6 icon-box'
        MyContent.innerHTML = CustomisedContent;
        skills.appendChild(MyContent);
    }
})


