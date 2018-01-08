module StarTravelling {
    enum WorldState {
        Running = 1,
        Paused = 2,
        InStation = 3,
        Warping = 4
    }

    export class World {
        public static readonly Instance: World = new World();
        private World() {

        }

        public WorldState: WorldState;

        public update(deltaTime) {

        }

        public draw(deltaTime)
        {

        }
    }
}
