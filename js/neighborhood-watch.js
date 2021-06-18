var random = Math.floor(stories.length * Math.random());
    var tale = stories[random].submission;
    var signed = stories[random].signed;
    function quoted(text){
      text = "❝" + text + "❞";
      return text;
    }

    document.getElementById('story').innerHTML = quoted(tale);
    document.getElementById('signature').innerHTML = signed;