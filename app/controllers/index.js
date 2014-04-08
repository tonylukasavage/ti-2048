var tiles = [],
	offsets = [0, 68, 135, 203];

for (var y = 0; y < 4; y++) {
	for (var x = 0; x < 4; x++) {
		var tile = Ti.UI.createView({
			height: 57.5,
			width: 57.5,
			top: offsets[y],
			left: offsets[x],
			borderRadius: 3,
			backgroundColor: '#eee4da',
			textAlign: 'center',
			font: {
				fontWeight: 'bold',
				fontSize: 55
			},
			zIndex: 10,
			opacity: 0.35
		});
		$.grid.add(tile);
		// !tiles[x] && (tiles[x] = []);
		// tiles[x][y] = tile;
	}
}

$.index.open();
