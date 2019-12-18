function isSecurityPrefSet(){
		try {
			var securitySetting = app.preferences.getPrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY");
			return (securitySetting == 1);
		} catch(err){
			alert("Error in isSecurityPrefSet function\n" + err.toString());
		}
	}

if (!(isSecurityPrefSet())) {
	alert("This script requires access to write files.\n" +
	"Go to the \"General\" panel of the application preferences and make sure\n" +
	"\"Allow Scripts to Write Files and Access Network\" is checked.");
	app.executeCommand(2359);
				}