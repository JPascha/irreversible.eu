<!-- sidebar -->
<div class="info-sb">
	<div class="floating-icon-info"><i class="fa fa-key"></i></div>
	<div class="floating-info top-info">
		<div class="popOutInfo">Verified!</div>
		<input class="input-info" id="inputInfo" type="text" placeholder="Guild Wars 2 API-key">
		<input class="submit-info" type="submit" value="&#xf00c;" onclick="getKey()" onerror="apiError()">
	</div>
	<div class="floating-icon-info"><i class="fa fa-steam"></i></div>
	<div class="floating-info steamInfo" id="noKey"><a title="Please enter your API-key above">Irreversible Steamgroup</a></div>
	<div class="floating-icon-info"><i class="fa fa-microphone"></i></div>
	<div class="floating-info discordInfo" id="noKey"><a title="Please enter your API-key above">Irreversible Discord server</a></div>
</div>
<div class="infoExpl">
	<p>Error info<a onclick="apiInfoClose()"><i class="fa fa-times"></i></a></p>
	<p>Your Guild Wars 2 API-key can be retrieved <a href="https://account.arena.net/applications" target="_blank">here</a>.</p>
	<p><span style="color:#c0392b;">E:01</span> You didn't put an API-key in at the <i>Guild Wars 2 API-key</i> field.</p>
	<p><span style="color:#c0392b;">E:02</span> You didn't put a correct API-key in, it was too short.</p>
	<p><span style="color:#c0392b;">E:03</span> You didn't put a correct API-key in, it was too long.</p>
	<p><span style="color:#c0392b;">E:04</span> You aren't a member of the guild or you put an incorrect API-key in.</p>
</div>
<!-- /sidebar -->
