/* 10.3*/

    window.onload = function()
    {
        var flaga = "true";

        document.getElementById("save").disabled = true;
        document.getElementById("save").style.cursor = "not-allowed";

    };

    function change1()
    {
        flaga = "false";
        document.getElementById("save").disabled = false;
        document.getElementById("save").style.cursor = "default";

        document.getElementById("name1").style.display = "none";
        document.getElementById("name2").style.display = "block";

        document.getElementById("school1").style.display = "none";
        document.getElementById("school2").style.display = "block";

        document.getElementById("major1").style.display = "none";
        document.getElementById("major2").style.display = "block";

        document.getElementById("em1").style.display = "none";
        document.getElementById("em2").style.display = "block";

        document.getElementById("phone1").style.display = "none";
        document.getElementById("phone2").style.display = "block";

        document.getElementById("sex1").style.display = "none";
        document.getElementById("sex2").style.display = "block";
        document.getElementById("grade1").style.display = "none";
        document.getElementById("grade2").style.display = "block";

        document.getElementById("chph").disabled = false;

        //document.getElementById("grade").disabled = false;
        //document.getElementById("grade").style.cursor="default";

       // document.getElementById("grade2").disabled = false;
        //document.getElementById("grade2").style.cursor="default";

        document.getElementById("tagadd").disabled = false;
        document.getElementById("tagadd").style.cursor="default";

        //document.getElementById("tagon").disabled = false;


    }

    function  saveit(){
        if(flaga == "false")
        {
            alert("已保存");
        }

    }

/* 添加标签   */
    var states = new Bloodhound({
        datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.word); },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        limit: 4,
        local: [
          { word: "Alabama" },
          { word: "Alaska" },
          { word: "Arizona" },
          { word: "Arkansas" },
          { word: "California" },
          { word: "Colorado" }
        ]
      });

      states.initialize();

      $('input.tagsinput').tagsinput();

      $('input.tagsinput-typeahead').tagsinput('input').typeahead(null, {
        name: 'states',
        displayKey: 'word',
        source: states.ttAdapter()
      });

      $('input.typeahead-only').typeahead(null, {
        name: 'states',
        displayKey: 'word',
        source: states.ttAdapter()
      });
/* 添加标签   */