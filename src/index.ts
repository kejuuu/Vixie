import { Application } from 'pixi.js'

class VXGame extends Application
{
	constructor(width : number, height : number) 
	{
		super();
		this.renderer.resize(width, height);
	}
}