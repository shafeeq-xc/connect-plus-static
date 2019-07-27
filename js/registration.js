 var UserID = 0;
 var Result = 0;
 var Name = "";
 var WrkHere = false;
 var FileName = "";
 var State = "";
 var Educan = "";
 var Expernce = "";
 var Traing = "";
 var BasicID = 0;
 var QualfnID = 0;
 var ExpernceID = 0;
 var TrainingID = 0;
 var Mode = "";
 $(document).ready(function () {

  $("#lblMsg").hide();
  $("#divDdl").show();
  $("#divExp2").hide();
  var Qstring = getQueryString();
  UserID = Qstring.ID;
  var Mode = Qstring.Mode;
         //  Mode = "E";
            //UserID = 13;
            if (Mode == "E") {
                // alert("aa");
                $("#divHead").css("display", "none");

                $("#h1Success").text("Data Updated Successfully");
                GetDataByUser();

              }
              else
                $("#divUpload").css("display", "block");
              getName();
              LoadCountry();
              GetDdlDatas();
              $(".btn-Change").click(function () {
                $("#divUpload").show();
                $("#DivButton").hide();
                //alert("ss");
              })
              $("#fileUpload").change(function () {
                //alert("fgh");

                var fileUpload = $("#fileUpload").get(0);
                var files = fileUpload.files;
                if (files.length == 0) {

                    //                    $("#lblMsg1").show();
                    //                    $("#lblMsg1").show().delay(5000).fadeOut();
                    //  $("#lblMsg1").hide();
                  }
                  else {
                    var data = new FormData();
                    for (var i = 0; i < files.length; i++) {
                      data.append(files[i].name, files[i]);
                    }

                    // alert(data);
                    // FileUploader(data);
                    $.ajax({
                      url: "Handler/UploadHandler.ashx",
                      type: "POST",
                      data: data,
                      contentType: false,
                      processData: false,
                      success: function (result) {
                            // alert(result);
                            FileName = result;
                          },
                          error: function (err) {
                            alert(err.statusText)
                          }
                        });
                  }
                })
              $("#ddlcountry").change(function () {
                var Id = this.id;
                if (($('#' + Id + ' option:selected').text()) == "India") {
                  $("#divText").hide();
                  $("#divDdl").show();
                  State = $("#ddlstate").val();
                    // alert(State);
                    // alert($("#ddlstate").val());

                  }

                  else {

                    $("#divText").show();
                    $("#txtState").prop('disabled', 'disabled');
                    State = "";
                    $("#txtState").css('background', '#bcc1c5');
                    $("#divDdl").hide();
                  }
                });
              $("#txtPercent").keydown(function (e) {
                // Allow: backspace, delete, tab, escape, enter and .
                if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                // Allow: Ctrl+A, Command+A
                (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
                // Allow: home, end, left, right, down, up
                (e.keyCode >= 35 && e.keyCode <= 40)) {
                    // let it happen, don't do anything
                  return;
                }
                // Ensure that it is a number and stop the keypress
                if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                  e.preventDefault();
                }
              });
              $("#txtYear").keydown(function (e) {
                // Allow: backspace, delete, tab, escape, enter and .
                if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                // Allow: Ctrl+A, Command+A
                (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
                // Allow: home, end, left, right, down, up
                (e.keyCode >= 35 && e.keyCode <= 40)) {
                    // let it happen, don't do anything
                  return;
                }
                // Ensure that it is a number and stop the keypress
                if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                  e.preventDefault();
                }
              });
              $("#btnBack").click(function () {
                window.location.href = "Profile.html?ID=" + UserID + "";
              })
              $("#chkWrking").change(function () {
                if (this.checked) {
                    //$("#txtDate2").hide();
                    $("#txtDate2").prop('disabled', 'disabled');
                    WrkHere = true;
                    $("#txtDate2").css('background', '#bcc1c5');

                  }
                  else {
                    $("#txtDate2").removeAttr('disabled');
                    $("#txtDate2").css('background', 'none');
                    WrkHere = false;

                  }
                })
              $("#btnMore").click(function () {
                SaveExperience();
                ExpernceID = 0;
              //  alert(ExpernceID);                      
              $("#txtDate1").val('');
              $("#txtDate2").val('');
              $("#txtDesign").val('');
              $("#txtCmpny").val('');
              $("#txtDescrpn").val('');
              $("#txtcntry").val('');
              $("#txtDate2").removeAttr('disabled');
              $('#chkWrking').prop('checked', false);
              $("#txtDate2").css('background', 'none');
              WrkHere = false;

            })
              $("#AddQualfn").click(function () {
                SaveQualification();
                QualfnID = 0;
                $("#ddlLevel").val(1);
                $("#txtUnvsty").val('');
                $("#txtYear").val('');
                $("#ddlStatus2").val();
                $("#txtCourse").val('');
                $("#txtPercent").val('');

              })
              $("#btnTrainingAdd").click(function () {
                SaveTraining();
                TrainingID = 0;
                $("#txtDuran").val('');
                $("#txtOrgan").val('');
                $("#txtDescrp").val('');
                $("#txtCousName").val('');


              })
              $("#btnBasic").click(function () {

                var Gender = $("#ddlGender").val();
                var Date = $("#txtDate").val();
                var Status = $("#ddlStatus").val();
                var Address = $("#txtAddress").val();
                Address = Address.trim();
                Address = Address.replace(/\n/g, ",");
                // alert(Address);
                var Country = $("#ddlcountry").val();
                // alert(Country);
                if (Country == 1)
                  State = $("#ddlstate").val();
                else
                  State = "";
                if (Date == "") {
                  $("#lblDOB").css("display", "block");
                }
                else {
                  $("#lblDOB").css("display", "none");

                }

                //if (Date != "") {
                  $.ajax({
                    type: "POST",
                    url: "WebService/Osprey.svc/BasicData",
                    data: {
                      format: 'json'
                    },
                    data: '{"BasicID": "' + BasicID + '","Gender": "' + Gender + '", "Date": "' + Date + '", "Address": "' + Address + '","UserID":"' + UserID + '","Status":"' + Status + '","Country":"' + Country + '","State":"' + State + '","FileName":"' + FileName + '"}',
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (Result) {
                      BasicID = Result.BasicID;
                        //  alert(Result.BasicID);


                      },
                      failure: function (response) {
                        console.log(response);
                      }
                      ,
                      error: function (error) {
                        console.log(JSON.stringify(error));
                      },
                      complete: function () {
                        // window.location.href = "otp-validation.html";
                      },async:false
                    })
                // }
                //                else {
                //                    $('#txtDate').css('border-color', 'red');
                //                }
              })
              $("#btnQualfn").click(function () {

                SaveQualification();
                if (Mode == "E") {
                  $("#tblQualfn").find('a').remove();
                  $("#tblTrng").find('a').remove();
                  $("#tblExp").find('a').remove();
                  GetDataByUser();

                }
                // $("#divHead").css("display", "none");
                //GetDataByUser();
                //                $("#ddlLevel").val(1);
                //                $("#txtUnvsty").val('');
                //                $("#txtYear").val('');
                //                // $("#ddlStatus2").val('');
                //                $("#txtPercent").val('');
              })
              $("#btnExpernce").click(function () {
                SaveExperience();
                if (Mode == "E") {
                  $("#tblQualfn").find('a').remove();
                  $("#tblTrng").find('a').remove();
                  $("#tblExp").find('a').remove();
                  GetDataByUser();

                }
                //                $("#txtDate2").val('');
                //                $("#txtDesign").val('');
                //                $("#txtCmpny").val('');
                //                $("#txtDescrpn").val('');
              })
              $("#btnTraing").click(function () {
                SaveTraining();

                $("#divSuccess").css('display', 'block');
                //                $("#txtOrgan").val('');
                //                $("#txtDescrp").val('');
                //window.location.href = "profile.html?ID=" + UserID + "";
              })
            })

 function GetDataByUser() {
  $.ajax({
    type: "POST",
    url: "WebService/Osprey.svc/GetProfile",
    data: {
      format: 'json'
    },
    data: '{"UserID":"' + UserID + '"}',
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (Result) {


      var data = JSON.parse(Result);
      console.log(data);
      var Basic = data.Table;
      Educan = data.Table1;
      Expernce = data.Table2;
      Traing = data.Table3;
      if (Educan.length > 0) {
        $("#tblQualfn").css("display", "block");
        $("#AddQualfn").html('Update & Add More');
      }
      if (Expernce.length > 0) {
        $("#tblExp").css("display", "block");
        $("#btnMore").html('Update & Add More');
      }
      if (Traing.length > 0) {
        $("#tblTrng").css("display", "block");
        $("#btnTrainingAdd").html('Update & Add More');
      }
      if (Basic[0].DetailsID != null) {
        $("#ddlGender").val(Basic[0].GenderID);
        $("#txtDate").val(Basic[0].DOB);
        $("#ddlStatus").val(Basic[0].StatusID);
        $("#txtAddress").val(Basic[0].Address);
        $("#ddlcountry").val(Basic[0].CountryID);
        $("#ddlstate").val(Basic[0].StateID);
        BasicID = Basic[0].DetailsID;
        FileName = Basic[0].FileName;
                        // FileName = "aa";
                        if (FileName == "") {
                          $("#divUpload").show();
                          $("#DivButton").hide();

                        }
                        else {
                          $("#DivButton").show();
                          $("#divUpload").hide();

                        }
                      }
                      else
                        $("#divUpload").css("display", "block");
                    //  $("#fileUpload").val(FileName);

                    for (var i = 0; i < Educan.length; i++) {
                      $("#tblQualfn").css("dispaly", "block");
                      
                      $("#tblQualfn").append('<a onclick="ShowQualfn(' + Educan[i].QualifnID + ')" class="job-edit-listing"><span class="job-title-edit">' + Educan[i].Qualification + '</span><span class="job-edit-icon"><i class="fas fa-pencil-alt" id="lnkEdit"></i></span></a>');

                    }

                    for (var i = 0; i < Expernce.length; i++) {
                      $("#tblExp").css("dispaly", "block");
                      
                      $("#tblExp").append('<a onclick="ShowExper(' + Expernce[i].ExperceID + ')" class="job-edit-listing"><span class="job-title-edit">' + Expernce[i].Designation + '</span><span class="job-edit-icon"><i class="fas fa-pencil-alt" id="lnkEdit"></i></span></a>');

                    }


                    for (var i = 0; i < Traing.length; i++) {
                      $("#tblTrng").css("dispaly", "block");
                      
                      $("#tblTrng").append('<a onclick="ShowTraing(' + Traing[i].TrainingID + ')" class="job-edit-listing"><span class="job-title-edit">' + Traing[i].CName + '</span><span class="job-edit-icon"><i class="fas fa-pencil-alt" id="lnkEdit"></i></span></a>');


                    }


                  },
                  failure: function (response) {
                    console.log(response);
                  }
                  ,
                  error: function (error) {
                    console.log(JSON.stringify(error));
                  },
                  complete: function () {
                    // window.location.href = "otp-validation.html";
                  }, async: false
                })
}
function ShowQualfn(QualifnID) {

  for (var i = 0; i < Educan.length; i++) {
    if (Educan[i].QualifnID == QualifnID) {
      QualfnID = Educan[i].QualifnID;
      $("#ddlStatus2").val(Educan[i].QualfnStatusID);
      $("#ddlLevel").val(Educan[i].LevelID);
      $("#txtCourse").val(Educan[i].Course);
      $("#txtPercent").val(Educan[i].Percentage);
      $("#txtYear").val(Educan[i].PassingYear);
      $("#txtUnvsty").val(Educan[i].University);
    }
  }


}
function ShowExper(QualifnID) {
  for (var i = 0; i < Expernce.length; i++) {

    if (Expernce[i].ExperceID == QualifnID) {
      ExpernceID = Expernce[i].ExperceID;
      $("#txtDate1").val(Expernce[i].FromDate);
      if (Expernce[i].ToDate == "Now       ") {
                        //alert("ccc");
                        $("#chkWrking").prop("checked", "true")
                        $("#txtDate2").prop('disabled', 'disabled');
                        $("#txtDate2").css('background', '#bcc1c5');
                        WrkHere = true;
                      }
                      else {
                        $("#txtDate2").val(Expernce[i].ToDate);
                        $("#txtDate2").css('background', 'none');
                        $("#txtDate2").removeAttr('disabled');
                        WrkHere = false;
                      }
                      $("#txtDesign").val(Expernce[i].Designation);
                      $("#txtCmpny").val(Expernce[i].Company);
                      $("#txtDescrpn").val(Expernce[i].experDecrn);
                      $("#ddlCntry").val(Expernce[i].Country);
                    }
                  }
                }
                function ShowTraing(QualifnID) {
                  for (var i = 0; i < Traing.length; i++) {
                    if (Traing[i].TrainingID == QualifnID) {
                      TrainingID = Traing[i].TrainingID;
                      $("#txtCousName").val(Traing[i].CName);
                      $("#txtDescrp").val(Traing[i].TrainDescrn);
                      $("#txtDuran").val(Traing[i].Duration);
                      $("#txtOrgan").val(Traing[i].Organizn);

                    }
                  }
                }
                function getName() {
                  $.ajax({
                    type: "POST",
                    url: "WebService/Osprey.svc/GetName",
                    data: {
                      format: 'json'
                    },
                    data: '{"UserID":"' + UserID + '"}',
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (Result) {
                      var data = JSON.parse(Result);
                      Name = data.name;
                    // alert(Name);
                    $("#lbNmae").text(Name);
                  },
                  failure: function (response) {
                    console.log(response);
                  }
                  ,
                  error: function (error) {
                    console.log(JSON.stringify(error));
                  },
                  complete: function () {
                    // window.location.href = "otp-validation.html";
                  }, async: false
                })
                }

                function LoadCountry() {
                  $.ajax({
                    type: "POST",
                    url: "WebService/Osprey.svc/LoadCountry",
                    data: {
                      format: 'json'
                    },
                    data: '{}',
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (Result) {
                      var result = JSON.parse(Result);
                      var data = result.Table;
                      for (var i = 0; i < data.length; i++) {
                        $("#ddlcountry").append('<option value="' + data[i].CountryID + '">' + data[i].CountryName + '</option>');
                        $("#ddlCntry").append('<option value="' + data[i].CountryID + '">' + data[i].CountryName + '</option>');
                      }
                      var state = result.Table1;

                      for (var i = 0; i < state.length; i++) {
                        $("#ddlstate").append('<option value="' + state[i].stateid + '">' + state[i].statename + '</option>');
                      }
                    // data.CountryID
                    // data.CountryName
                  },
                  failure: function (response) {
                    console.log(response);
                  }
                  ,
                  error: function (error) {
                    console.log(JSON.stringify(error));
                  },
                  complete: function () {
                    // window.location.href = "otp-validation.html";
                  }, async: false
                })
                }
                function getQueryString(e) {

                  var sPageURL = window.location.search.substring(1);
                  var output = [];
                  var obj = {}
                  var Qstring = sPageURL.split('&');
                  for (var i = 0; i < Qstring.length; i++) {
                    var a = Qstring[i].split('=');
                    obj[a[0]] = a[1];
                  }
                  return obj;
                }
                function SaveQualification() {
                  var Level = $("#ddlLevel").val();
                  var University = $("#txtUnvsty").val();
                  var Year = $("#txtYear").val();
                  var Status2 = $("#ddlStatus2").val();
                  var Percent = $("#txtPercent").val();
                  var Course = $("#txtCourse").val();
            //            if (Course == "")
            //           
            //                $("#lblCourse").css("display", "block");
            //            else
            //                $("#lblCourse").css("display", "none");

            //            if (Level == 1)
            //                $("#lblLevel").css("display", "block");
            //            else
            //                $("#lblLevel").css("display", "none");

            //            if (Percent == "")
            //                $("#lblPercent").css("display", "block");
            //            else
            //                $("#lblPercent").css("display", "none");
            if (Course != "") {
              $.ajax({
                type: "POST",
                url: "WebService/Osprey.svc/Qualification",
                data: {
                  format: 'json'
                },
                data: '{"QualfnID": "' + QualfnID + '","Level": "' + Level + '", "University": "' + University + '", "Year": "' + Year + '","UserID":"' + UserID + '","Status2":"' + Status2 + '","Percent":"' + Percent + '", "Course": "' + Course + '"}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (Result) {
                        //var data = JSON.parse(Result);
                        QualfnID = Result.QualfnID;
                        //alert(data.messageAR);
                        
                        

                      },
                      failure: function (response) {
                        console.log(response);
                      }
                      ,
                      error: function (error) {
                        console.log(JSON.stringify(error));
                      },
                      complete: function () {
                        // window.location.href = "otp-validation.html";
                      },
                      async: false

                    })
            }
          }
          function SaveExperience() {
            var FromDate = $("#txtDate1").val();
            var ToDate = $("#txtDate2").val();
            var Designation = $("#txtDesign").val();
            var Company = $("#txtCmpny").val();
            var Description = $("#txtDescrpn").val();
            var Cntry = $("#ddlCntry").val();
            if (Designation != "") {
              $.ajax({
                type: "POST",
                url: "WebService/Osprey.svc/Experience",
                data: {
                  format: 'json'
                },
                data: '{"ExpernceID":"' + ExpernceID + '","FromDate":"' + FromDate + '","ToDate":"' + ToDate + '","Designation":"' + Designation + '","UserID":"' + UserID + '","Company":"' + Company + '","Description":"' + Description + '","WrkHere":"' + WrkHere + '","Country":"' + Cntry + '"}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (Result) {
                  ExpernceID = Result.ExpernceID;
                      //  alert(ExpernceID);
                      
                        //alert(data.messageAR);
                        // GetDataByUser();
                      },
                      failure: function (response) {
                        console.log(response);
                      }
                      ,
                      error: function (error) {
                        console.log(JSON.stringify(error));
                      },
                      complete: function () {
                        // window.location.href = "otp-validation.html";
                      },
                      async:false

                    })
            }
          }
          function SaveTraining() {


            var Duration = $("#txtDuran").val();
            var Organizn = $("#txtOrgan").val();
            var Descrpn = $("#txtDescrp").val();
            var CName = $("#txtCousName").val();
            if (CName != "") {
              $.ajax({
                type: "POST",
                url: "WebService/Osprey.svc/Training",
                data: {
                  format: 'json'
                },
                data: '{"TrainingID":"' + TrainingID + '","Duration":"' + Duration + '","Organizn":"' + Organizn + '","Descrpn":"' + Descrpn + '","UserID":"' + UserID + '","CName":"' + CName + '"}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (Result) {
                        // var data = JSON.parse(Result);
                        TrainingID = Result.TrainingID;
                        
                        //alert(data.messageAR);
                        // GetDataByUser();
                      },
                      failure: function (response) {
                        console.log(response);
                      }
                      ,
                      error: function (error) {
                        console.log(JSON.stringify(error));
                      },
                      complete: function () {

                      },
                      async: false

                    })
            }
          }


          function FileUploader(data) {

            $.ajax({
              url: "Handler/UploadHandler.ashx",
              type: "POST",
              data: data,
              contentType: false,
              processData: false,
              success: function (result) {

                FileName = result;
                SaveResume(FileName);
              },
              error: function (err) {
                alert(err.statusText)
              }
            });
          }
          function GetDdlDatas() {
            $.ajax({
              type: "POST",
              url: "WebService/Osprey.svc/GetDdlDatas",
              data: {
                format: 'json'
              },
              data: '{}',
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function (Result) {
                var result = JSON.parse(Result);
                var gender = result.Table;
                for (var i = 0; i < gender.length; i++) {
                  $("#ddlGender").append('<option value="' + gender[i].GenderID + '">' + gender[i].Gender + '</option>');

                }
                var status = result.Table1;

                for (var i = 0; i < status.length; i++) {
                  $("#ddlStatus").append('<option value="' + status[i].StatusID + '">' + status[i].Status + '</option>');
                }
                var level = result.Table2;

                for (var i = 0; i < level.length; i++) {
                  $("#ddlLevel").append('<option value="' + level[i].LevelID + '">' + level[i].Level + '</option>');
                }
                var QualfnStatus = result.Table3;

                for (var i = 0; i < QualfnStatus.length; i++) {
                  $("#ddlStatus2").append('<option value="' + QualfnStatus[i].QualfnStatusID + '">' + QualfnStatus[i].Status + '</option>');
                }
              },
              failure: function (response) {
                console.log(response);
              }
              ,
              error: function (error) {
                console.log(JSON.stringify(error));
              },
              complete: function () {
                    // window.location.href = "otp-validation.html";
                  }, async: false
                })
          }
