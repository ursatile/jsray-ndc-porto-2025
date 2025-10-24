import { Camera, Scene, Vector, Color } from '../modules/renderer.js';
import { Sphere } from '../modules/shapes/sphere.js';
import { Box } from '../modules/shapes/box.js';
import { Plane } from '../modules/shapes/plane.js';

import { Light } from '../modules/light.js';
import { Appearance } from '../modules/appearance.js';

export function EmptySky() {
    let camera = new Camera(new Vector(-4, 1, -5), new Vector(0, 1, 0));
    let background = new Color(120, 150, 255);
    return new Scene(camera, background);
}

export function ColoredSpheres() {
    let camera = new Camera(new Vector(2, 4, -8), Vector.Z);
    let background = new Color(100,120,240);
    let shapes = [
        new Sphere(new Vector(-4, 1, 4), 1, Color.Yellow),
        new Sphere(new Vector(-2, 1, 2), 1, Color.Red),
        // new Sphere(new Vector(+0, 1, 0), 1, Color.White),
        new Box(new Vector(-1,0,-1), new Vector(1,2,1), Color.Magenta),
        new Sphere(new Vector(+2, 1, 2), 1, Color.Green),
        new Sphere(new Vector(+4, 1, 4), 1, Color.Blue),
        new Plane((Vector.Y), 0, Color.White)
    ];
    let lights = [ 
        new Light(new Vector(5, 10, -5), Color.White),
        // new Light(new Vector(-5, 2, -5), new Color(255,127,50)),
     ]; 
    return new Scene(camera, background, shapes, lights);
}