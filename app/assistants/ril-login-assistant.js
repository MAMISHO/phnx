function RilLoginAssistant() {
}

RilLoginAssistant.prototype.setup = function() {
    this.controller.setupWidget("rilUserFieldId",
		this.attributes = {
			hintText: $L("ReadItLater Username"),
			multiline: false,
			enterSubmits: false,
			autoFocus: true
		},
		this.RilUserValue =  {	
			value: "",
			disabled: false
		}
	);
    
	this.controller.setupWidget("rilPassFieldId",
    this.attributes = {
        hintText: $L("ReadItLater Password"),
        multiline: false,
        enterSubmits: false,
        autoFocus: false
    },
    this.RilPassValue = {
        value: "",
        disabled: false
    }
);
	this.controller.setupWidget("ippUserFieldId",
	this.attributes = {
        hintText: $L("InstaPaper Username"),
        multiline: false,
        enterSubmits: false,
        autoFocus: false
    },
    this.IpUserValue = {
        value: "",
        disabled: false
    }
);
	this.controller.setupWidget("ippPassFieldId",
	this.attributes = {
        hintText: $L("InstaPaper Password"),
        multiline: false,
        enterSubmits: false,
        autoFocus: false
    },
    this.IpPassValue = {
        value: "",
        disabled: false
    }
);
	 this.controller.setupWidget("loginRil",
         this.attributes = {
         	type: Mojo.Widget.defaultButton 
             },
         this.model = {
             label : "Login to ReaditLater",
             disabled: false
         }
     );
	 this.controller.setupWidget("loginIp",
         this.attributes = {
         	type: Mojo.Widget.defaultButton
             },
         this.model = {
             label : "Login to InstaPaper",
             disabled: false
         }
     );
    /*Mojo.Event.listen(this.controller.get("rilUserFieldId"),
Mojo.Event.propertyChange,
this.handleUpdateRilUser.bindAsEventListener(this));
    Mojo.Event.listen(this.controller.get("rilPassFieldId"),
Mojo.Event.propertyChange, this.handleUpdateRilPw.bindAsEventListener(this));
    Mojo.Event.listen(this.controller.get("ippUserFieldId"),
Mojo.Event.propertyChange, this.handleUpdateIpUser.bindAsEventListener(this));
    Mojo.Event.listen(this.controller.get("ippPassFieldId"),
Mojo.Event.propertyChange, this.handleUpdateIpPass.bindAsEventListener(this));*/
    Mojo.Event.listen(this.controller.get('loginRil'), Mojo.Event.tap,
this.logIntoRil.bindAsEventListener(this));
    Mojo.Event.listen(this.controller.get('loginIp'), Mojo.Event.tap,
this.logIntoIp.bindAsEventListener(this));




};    

RilLoginAssistant.prototype.logIntoRil = function(event) {
  /*this.rilUser = this.RilUserValue.value;
  var rilPassword = this.RilPassValue.value;
  var rilApi = 'a4dT4Vd0g7137p788fdD0G9e74pfg7d5';*/
 /*new Ajax.Request('https://readitlaterlist.com/v2/auth',
  {
    method:'post',
    parameters: {username: rilUser, password: rilPassword, apikey: rilApi},
    onSuccess: function(){
      Mojo.Log.info('Login successful!')
    }.bind(this),
    onFailure: function(){ Mojo.Log.error('Something went wrong in the login')
}.bind(this)
  });*/
 Mojo.Log.info(this.RilUserValue.value)
};

RilLoginAssistant.prototype.logIntoIp = function() {
  var ipUser = this.IpUserValue.value;
  var ipPassword = this.IpPassValue.value;
 new Ajax.Request('https://www.instapaper.com/api/authenticate',
  {
    method:'post',
    parameters: {username: ipUser, password: ipPassword},
    onSuccess: function(){
      Mojo.Log.info('Login successful!')
    }.bind(this),
    onFailure: function(){ Mojo.Log.error('Something went wrong in the login')
}.bind(this)
  });
  Mojo.Log.info('Username is ' + ipUser + ' and the password is ' + ipPassword)
};

RilLoginAssistant.prototype.activate = function(event) {
	
};

RilLoginAssistant.prototype.deactivate = function(event) {
	
};

RilLoginAssistant.prototype.cleanup = function(event) {
	
};
