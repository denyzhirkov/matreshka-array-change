//v0.3

;(function(MKA){

var change = function(arr1, arr2, options){

	var el = null;
	var used = {};

	if(!arr1.trackBy){

		return arr1;

	}else{

		while(el = arr2.pop()){

			if(arr1.length != 0){

				for (var i = arr1.length - 1; i >= 0; i--) {

					if(!(i in used)){
						
						if(arr1[i][arr1.trackBy] == el[arr1.trackBy]){ //if objects are the same (arr1.trackBy)

							used[i]=i; //add to 'used'

							for(v in el){

								if(arr1[i].hasOwnProperty(v)){ //changing values in ORIGINAL array object with NEW ARRAY object

									arr1[i][v] = el[v];

								}

							}

							break;

						}else{
							
							if(0 == i && options.push != false){ //pushing if not in ORIGINAL array and push is allowed (options.push)

								arr1.push(el);

							}

						}

					}

				}

			}else{

				if(options.push != false){

					arr1.push(el);

				}

			}

		}

		return arr1;

	}

};

MKA.prototype.change = function(arr, options){

	var arr = arr || [];
	var options = options || {};

	return change(this, arr, options);

}

})(MK.Array);