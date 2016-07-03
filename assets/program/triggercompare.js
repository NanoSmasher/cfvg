var about = 'PROGRAM: <br /> &#8195; Displays advantages of two competing trigger ratios <br /><br /> ASSUMPTIONS MADE: <br /> &#8195; No stand triggers <br /> &#8195; Opponent lets one attack through <br /> &#8195; No effects <br /> &#8195; 2/2/2 field <br /> &#8195; Deck is sufficiently randomized <br /> &#8195; Opponent guards optimally <br /><br /> MADE BY: <br /> &#8195; Brampton Booster <br /> &#8195; Copyright 2014 (c) MIT License <br /> <br />LINKS: <br /> &#8195; <a href="http://nanosmasher.github.io/cfvg/blog/trigger-ratio/">My Vanguard Blog</a> <br /> &#8195; <a href="https://github.com/NanoSmasher/prob-cfvg">My Vanguard scripts on Github</a><br /> &#8195; <a href="mailto:bramptonbooster@hotmail.ca"> My email contact</a><br /> &#8195; <a href="https://github.com/NanoSmasher/prob-cfvg/blob/master/TriggerCompare.py">My original source code</a><br /> &#8195; <a href="https://www.dropbox.com/s/bbiqknqjc5tdwq6/trigcompare.zip">My windows executable version</a>'

var isShown = 0

function check(a,b,c,d,e,f){
	if (a+b+c==16 && d+e+f==16) return 1
	else if (!(b>=0&&b<17)) document.getElementById('error').innerHTML = "Invalid input for your number of crits";
	else if (!(a>=0&&a<5)) document.getElementById('error').innerHTML = "Invalid input for your number of heals";
	else if (!(c>=0&&c<17)) document.getElementById('error').innerHTML = "Invalid input for your number of draws";
	else if (!(e>=0&&e<17)) document.getElementById('error').innerHTML = "Invalid input for opponent's number of crits";
	else if (!(d>=0&&d<5)) document.getElementById('error').innerHTML = "Invalid input for opponent's number of heals";
	else if (!(f>=0&&f<17)) document.getElementById('error').innerHTML = "Invalid input for opponent's number of draws";
	else document.getElementById('error').innerHTML = "Trigger ratios do not add up to 16";
	return 0
}

function calculate(){
	var a = parseFloat(document.getElementById("yheal").value);
	var b = parseFloat(document.getElementById("ycrit").value);
	var c = parseFloat(document.getElementById("ydraw").value);
	var d = parseFloat(document.getElementById("fheal").value);
	var e = parseFloat(document.getElementById("fcrit").value);
	var f = parseFloat(document.getElementById("fdraw").value);
	if (check(a,b,c,d,e,f)==0) return
	
	document.getElementById('error').innerHTML = "";
	document.getElementById('ratio').innerHTML = 'Expected Losses based on your ratio of '+b+'C/'+a+'H/'+c+'D and the opponents ratio of '+e+'C/'+d+'H/'+f+"D";
	r = rvr(a,b,c,d,e,f);
    v = vrr(a,b,c,d,e,f);
	
	document.getElementById('dam1').innerHTML = r[0][0];
	document.getElementById('car1').innerHTML = r[0][1];
	document.getElementById('shi1').innerHTML = r[0][2];
	document.getElementById('dam2').innerHTML = r[1][0];
	document.getElementById('car2').innerHTML = r[1][1];
	document.getElementById('shi2').innerHTML = r[1][2];
	document.getElementById('dam3').innerHTML = v[0][0];
	document.getElementById('car3').innerHTML = v[0][1];
	document.getElementById('shi3').innerHTML = v[0][2];
	document.getElementById('dam4').innerHTML = v[1][0];
	document.getElementById('car4').innerHTML = v[1][1];
	document.getElementById('shi4').innerHTML = v[1][2];
	document.getElementById('heal').innerHTML = r[0][3];
	document.getElementById('gain').innerHTML = r[0][4];
}

function explain(){
	if (isShown == 0){
		isShown = 1;
		document.getElementById('source').innerHTML = about;
	} else {
		isShown = 0;
		document.getElementById('source').innerHTML = '';
	}
}


function dmg3(ht,ct,dt){
    //Returns values for the event when 3 damage is taken//
    var dmg = 0
    var sld = []
    var hin = 0

    // Here is the peachiest calculation of them all.
    var nt=33       // to make things easier to read and more consistent w/format
    var hththt = (ht/49)*((ht-1)/48)*((ht-2)/47)    
	var hthtct = (ht/49)*((ht-1)/48)*(ct/47) + (ht/49)*(ct/48)*((ht-1)/47) + (ct/49)*(ht/48)*((ht-1)/47)
    var hthtdt = (ht/49)*((ht-1)/48)*(dt/47) + (ht/49)*(dt/48)*((ht-1)/47) + (dt/49)*(ht/48)*((ht-1)/47)   
	var hthtnt = (ht/49)*((ht-1)/48)*(nt/47) + (ht/49)*(nt/48)*((ht-1)/47) + (nt/49)*(ht/48)*((ht-1)/47)
    var htctct = (ct/49)*((ct-1)/48)*(ht/47) + (ct/49)*(ht/48)*((ct-1)/47) + (ht/49)*(ct/48)*((ct-1)/47)
    var htctdt = (ht/49)*(ct/48)*(dt/47) + (ht/49)*(dt/48)*(ct/47) + (ct/49)*(ht/48)*(dt/47) + (ct/49)*(dt/48)*(ht/47) + (dt/49)*(ht/48)*(ct/47) + (dt/49)*(ht/48)*(ct/47)
    var htctnt = (ht/49)*(ct/48)*(nt/47) + (ht/49)*(nt/48)*(ct/47) + (ct/49)*(ht/48)*(nt/47) + (ct/49)*(nt/48)*(ht/47) + (nt/49)*(ht/48)*(ct/47) + (nt/49)*(ht/48)*(ct/47)
    var htdtdt = (dt/49)*((dt-1)/48)*(ht/47) + (dt/49)*(ht/48)*((dt-1)/47) + (ht/49)*(dt/48)*((dt-1)/47)
    var htdtnt = (ht/49)*(dt/48)*(nt/47) + (ht/49)*(nt/48)*(dt/47) + (dt/49)*(ht/48)*(nt/47) + (dt/49)*(nt/48)*(ht/47) + (nt/49)*(ht/48)*(dt/47) + (nt/49)*(ht/48)*(dt/47)
    var htntnt = (nt/49)*((nt-1)/48)*(ht/47) + (nt/49)*(ht/48)*((nt-1)/47) + (ht/49)*(nt/48)*((nt-1)/47)
    var ctctct = (ct/49)*((ct-1)/48)*((ct-2)/47)   
	var ctctdt = (ct/49)*((ct-1)/48)*(dt/47) + (ct/49)*(dt/48)*((ct-1)/47) + (dt/49)*(ct/48)*((ct-1)/47)
    var ctctnt = (ct/49)*((ct-1)/48)*(nt/47) + (ct/49)*(nt/48)*((ct-1)/47) + (nt/49)*(ct/48)*((ct-1)/47) 
	var ctdtdt = (dt/49)*((dt-1)/48)*(ct/47) + (dt/49)*(ct/48)*((dt-1)/47) + (ct/49)*(dt/48)*((dt-1)/47)
    var ctdtnt = (ct/49)*(dt/48)*(nt/47) + (ct/49)*(nt/48)*(dt/47) + (dt/49)*(ct/48)*(nt/47) + (dt/49)*(nt/48)*(ct/47) + (nt/49)*(ct/48)*(dt/47) + (nt/49)*(ct/48)*(dt/47)
    var ctntnt = (nt/49)*((nt-1)/48)*(ct/47) + (nt/49)*(ct/48)*((nt-1)/47) + (ct/49)*(nt/48)*((nt-1)/47)
    var dtdtdt = (dt/49)*((dt-1)/48)*((dt-2)/47)   
	var dtdtnt = (dt/49)*((dt-1)/48)*(nt/47) + (dt/49)*(nt/48)*((dt-1)/47) + (nt/49)*(dt/48)*((dt-1)/47)
    var dtntnt = (nt/49)*((nt-1)/48)*(dt/47) + (nt/49)*(dt/48)*((nt-1)/47) + (dt/49)*(nt/48)*((nt-1)/47)  
	var ntntnt = (nt/49)*((nt-1)/48)*((nt-2)/47)
    /*
		total = (hththt+hthtct+hthtdt+hthtnt+htctct+htctdt+htctnt+htdtdt+htdtnt+htntnt+ctctct+ctctdt+ctctnt+ctdtdt+ctdtnt+ctntnt+dtdtdt+dtdtnt+dtntnt+ntntnt)
		//confirm it all adds up to 1 
	*/

    //check damage given
    dmg += 3*(ctctct+ctctdt+ctctnt+ctdtdt+ctdtnt+ctntnt+dtdtdt+dtdtnt+dtntnt+ntntnt)
    dmg += 2*(htctct+htctdt+htctnt+htdtdt+htdtnt+htntnt)
    dmg += 1*(hthtct+hthtdt+hthtnt)
    dmg += 0*(hththt)                            //for lulz

    //shield saved
    sld.push(ntntnt)
    sld.push(htntnt+dtntnt+ctntnt)
    sld.push(hthtnt+htctnt+htdtnt+ctctnt+ctdtnt+dtdtnt)
    sld.push(hththt+hthtct+hthtdt+htctct+htctdt+htdtdt+ctctct+ctctdt+ctdtdt+dtdtdt)

    //cards drawn
    hin = 3*(dtdtdt) + 2*(htdtdt+ctdtdt+dtdtnt) + 1*(hthtdt+htctdt+htdtnt+ctctdt+ctdtnt+dtntnt)

    return [dmg, sld, hin]
}

function dmg2(ht,ct,dt){
    //Returns values for the event when 2 damage is taken//
    var dmg = 0
    var sld = []
    var hin = 0

    var nt=33
	var htht = (ht/49)*((ht-1)/48)   
	var htct = (ht/49)*(ct/48) + (ct/49)*(ht/48)   
	var htdt = (ht/49)*(dt/48) + (dt/49)*(ht/48)
	var htnt = (ht/49)*(nt/48) + (nt/49)*(ht/48)    
	var ctct = (ct/49)*((ct-1)/48)    
	var ctdt = (ct/49)*(dt/48) + (dt/49)*(ct/48)
    var ctnt = (ct/49)*(nt/48) + (nt/49)*(ct/48)
	var dtdt = (dt/49)*((dt-1)/48)   
	var dtnt = (dt/49)*(nt/48) + (nt/49)*(dt/48)   
	var ntnt = (nt/49)*((nt-1)/48)
    //total = (htht+htct+htdt+htnt+ctct+ctdt+ctnt+dtdt+dtnt+ntnt)
	//confirm it all adds up to 1
    
    dmg += 2*(ctct+ctdt+ctnt+dtdt+dtnt+ntnt)
    dmg += 1*(htct+htdt+htnt)
    sld.push(ntnt)
    sld.push(htnt+ctnt+dtnt)
    sld.push(htht+htct+htdt+ctct+ctdt+dtdt)

    hin += 2*(dtdt) + 1*(htdt+ctdt+dtnt)

    return [dmg, sld, hin]
}

function dmg1(ht,ct,dt){
    return [(49-ht)/49 , 16/49 , dt/49]
}

function drive(hT,cT,dT){
    //Returns values for the twin drive//
    // Drive check odds.
	var hThT = (hT/49)*((hT-1)/48)    
	var hTcT = (hT/49)*(cT/48)+(cT/49)*(hT/48)   
	var hTdT = (hT/49)*(dT/48)+(dT/49)*(hT/48)    
	var hTnT = (hT/49)*(33/48)+(33/49)*(hT/48)
	var cTcT = (cT/49)*((cT-1)/48)   
	var cTdT = (cT/49)*(dT/48)+(dT/49)*(cT/48)   
	var cTnT = (cT/49)*(33/48)+(33/49)*(cT/48)  
	var dTdT = (dT/49)*((dT-1)/48)   
	var dTnT = (dT/49)*(33/48)+(33/49)*(dT/48)
    var nTnT = (22/49)
    //repackage the odds as a list.
    var drive = [hThT,hTcT,hTdT,hTnT,cTcT,cTdT,cTnT,dTdT,dTnT,nTnT] //useless

    var dmgstg = [] // 4 x 3 matrix with columns of damage dealt and stages gained
    dmgstg.push([nTnT, dTnT+hTnT, dTdT+hTdT+hThT, nTnT+dTnT+hTnT+dTdT+hTdT+hThT])
    dmgstg.push([0, cTnT, hTcT+cTdT, cTnT+hTcT+cTdT])
    dmgstg.push([0,0,cTcT,cTcT])

    var dmgh = 2*hThT + hTcT+hTdT+hTnT    //damage healed
    var drw = 2*dTdT + hTdT+cTdT+dTnT     //cards drawn

    return [dmgstg,dmgh,drw,drive]
}

function r_guardRG(hT,cT,dT,ht,ct,dt){
    //returns expected outcome for RVR and guarding the first rearguard attack//

    var drivecheck = drive(hT,cT,dT)
    var state = [0,0,0,0,0]
    var d1 = dmg1(ht,ct,dt)
    var d2 = dmg2(ht,ct,dt)
    var d3 = dmg3(ht,ct,dt)

    // for all events that dealt x damage, find actual damage
    state[0] += drivecheck[0][0][3]*d1[0] //drive check no crits
    state[0] += drivecheck[0][1][3]*d2[0]
    state[0] += drivecheck[0][2][3]*d3[0]

    // find out card loss for different events
    state[1] += 1 // for guarding the first rearguard
    state[1] += (drivecheck[0][0][0])*(1)
    state[1] += (drivecheck[0][0][1])*((1-d1[1])*2+d1[1])
    state[1] += (drivecheck[0][0][2])*(2)
    state[1] += (drivecheck[0][1][1])*((d2[1][0])*2+(d2[1][1]+d2[1][2])*1)
    state[1] += (drivecheck[0][1][2])*((d2[1][0]+d2[1][1])*2+(d2[1][2])*1)
    state[1] += (drivecheck[0][2][2])*((d3[1][0]+d3[1][1])*2+(d3[1][2]+d3[1][3])*1)

    // find how many cards are recovered to get the total card loss
    var recover = 0
    recover += drivecheck[0][0][3]*d1[2] //drive check no crits
    recover += drivecheck[0][1][3]*d2[2]
    recover += drivecheck[0][2][3]*d3[2]
    state[1] -= recover

    // find out shield loss for different events
    state[2] += 2
    state[2] += (drivecheck[0][0][0])*((1-d1[1])*2+d1[1]*1)
    state[2] += (drivecheck[0][0][1])*((1-d1[1])*3+d1[1]*2)
    state[2] += (drivecheck[0][0][2])*((1-d1[1])*4+d1[1]*3)
    state[2] += (drivecheck[0][1][1])*(d2[1][0]*3+d2[1][1]*2+d2[1][2]*1)
    state[2] += (drivecheck[0][1][2])*(d2[1][0]*4+d2[1][1]*3+d2[1][2]*2)
    state[2] += (drivecheck[0][2][2])*(d3[1][0]*4+d3[1][1]*3+d3[1][2]*2+d3[1][3]*1)
    state[2] *= 5000

    state[3] = drivecheck[1]    // Calculate damage you recovered
    state[4] = drivecheck[2]    // Calculate extra amount of cards drawn.
    return state
}

function r_guardVG(hT,cT,dT,ht,ct,dt){
    //returns expected outcome for RVR and guarding the vanguard attack//
    var drivecheck = drive(hT,cT,dT)
    var state = [0,0,0,0,0]
    var d1 = dmg1(ht,ct,dt)
    var d2 = dmg2(ht,ct,dt)
    var d3 = dmg3(ht,ct,dt)

    state[0] += d1[0]

    // find out card loss for different events
    y = d1[1]             // get damage trigger
    n = 1-d1[1]           // no damage trigger
    state[1] += (drivecheck[0][0][0])*(n*3+y*2)
    state[1] += (drivecheck[0][0][1])*(n*4+y*2)
    state[1] += (drivecheck[0][0][2])*(n*4+y*3)
    state[1] += (drivecheck[0][1][1])*(n*4+y*2)
    state[1] += (drivecheck[0][1][2])*(n*4+y*3)
    state[1] += (drivecheck[0][2][2])*(n*4+y*3)

    // find how many cards are recovered to get the total card loss
    var recover = 0
    recover += d1[2]
    state[1] -= recover

    // find out shield loss for different events
    // Using y and n from before
    state[2] += (drivecheck[0][0][0])*(n*5+y*3)
    state[2] += (drivecheck[0][0][1])*(n*6+y*4)
    state[2] += (drivecheck[0][0][2])*(n*7+y*5)
    state[2] += (drivecheck[0][1][1])*(n*6+y*4)
    state[2] += (drivecheck[0][1][2])*(n*7+y*5)
    state[2] += (drivecheck[0][2][2])*(n*7+y*5)
    state[2] *= 5000

    state[3] = drivecheck[1]    // Calculate damage you recovered
    state[4] = drivecheck[2]    // Calculate extra amount of cards drawn.
    return state
}

function v_guardRG(hT,cT,dT,ht,ct,dt){
    //returns expected outcome for VRR and guarding both rearguards//
    var drivecheck = drive(hT,cT,dT)
    var state = [0,0,0,0,0]
    var d1 = dmg1(ht,ct,dt)
    var d2 = dmg2(ht,ct,dt)
    var d3 = dmg3(ht,ct,dt)

    // for all events that dealt x damage, find actual damage
    state[0] += drivecheck[0][0][3]*d1[0]
    state[0] += drivecheck[0][1][3]*d2[0]
    state[0] += drivecheck[0][2][3]*d3[0]

    // find out card loss for different events
    state[1] += (drivecheck[0][0][0])*(2)
    state[1] += (drivecheck[0][0][1])*((1-d1[1])*3+d1[1]*2)
    state[1] += (drivecheck[0][0][2])*(3)
    state[1] += (drivecheck[0][1][1])*((d2[1][0])*3+(d2[1][1]+d2[1][2])*2)
    state[1] += (drivecheck[0][1][2])*((d2[1][0]+d2[1][1])*3+(d2[1][2])*2)
    state[1] += (drivecheck[0][2][2])*((d3[1][0]+d3[1][1])*3+(d3[1][2]+d3[1][3])*2)

    // find how many cards are recovered to get the total card loss
    var recover = 0
    recover += drivecheck[0][0][3]*d1[2] //drive check no crits
    recover += drivecheck[0][1][3]*d2[2]
    recover += drivecheck[0][2][3]*d3[2]
    state[1] -= recover

    // find out shield loss for different events
    state[2] += (drivecheck[0][0][0])*((1-d1[1])*4+d1[1]*2)
    state[2] += (drivecheck[0][0][1])*((1-d1[1])*5+d1[1]*3)
    state[2] += (drivecheck[0][0][2])*((1-d1[1])*6+d1[1]*4)
    state[2] += (drivecheck[0][1][1])*(d2[1][0]*5+d2[1][1]*3+d2[1][2]*1)
    state[2] += (drivecheck[0][1][2])*(d2[1][0]*6+d2[1][1]*4+d2[1][2]*2)
    state[2] += (drivecheck[0][2][2])*(d3[1][0]*6+d3[1][1]*4+d3[1][2]*2+d3[1][3]*1)
    state[2] *= 5000

    state[3] = drivecheck[1]    // Calculate damage you recovered
    state[4] = drivecheck[2]    // Calculate extra amount of cards drawn.
    return state
}

function v_guardVG(hT,cT,dT,ht,ct,dt){
    //returns expected outcome for VRR and guarding the vanguard attack//
    var drivecheck = drive(hT,cT,dT)
    var state = [0,0,0,0,0]
    var d1 = dmg1(ht,ct,dt)
    var d2 = dmg2(ht,ct,dt)
    var d3 = dmg3(ht,ct,dt)

    // find damage
    state[0] += d1[0]

    // find out card loss for different events
    state[1] += (drivecheck[0][0][0])*(3)
    state[1] += (drivecheck[0][0][1])*(3)
    state[1] += (drivecheck[0][0][2])*(4)
    state[1] += (drivecheck[0][1][1])*(4)
    state[1] += (drivecheck[0][1][2])*(4)
    state[1] += (drivecheck[0][2][2])*(4)

    // find how many cards are recovered to get the total card loss
    var recover = 0
    recover += d1[2]
    state[1] -= recover

    // find out shield loss for different events
    state[2] += 3
    state[2] += (drivecheck[0][0][0])*(2)
    state[2] += (drivecheck[0][0][1])*(2)
    state[2] += (drivecheck[0][0][2])*(2)
    state[2] += (drivecheck[0][1][1])*(3)
    state[2] += (drivecheck[0][1][2])*(4)
    state[2] += (drivecheck[0][2][2])*(4)
    state[2] *= 5000

    state[3] = drivecheck[1]    // Calculate damage you recovered
    state[4] = drivecheck[2]    // Calculate extra amount of cards drawn.
    return state
}

function rvr(hT,cT,dT,ht,ct,dt){
    guardrear = r_guardRG(hT,cT,dT,ht,ct,dt)
    guardvan = r_guardVG(hT,cT,dT,ht,ct,dt)
    return [guardrear,guardvan]
}

function vrr(hT,cT,dT,ht,ct,dt){
    guardrear = v_guardRG(hT,cT,dT,ht,ct,dt)
    guardvan = v_guardVG(hT,cT,dT,ht,ct,dt)
    return [guardrear,guardvan]
}