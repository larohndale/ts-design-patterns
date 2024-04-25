This README provides a simplified overview of 10 design patterns from the influential book _Design Patterns_ by the Gang of Four, adapted with modern TypeScript examples. For additional patterns and examples, refer to [Design Patterns](https://en.wikipedia.org/wiki/Design_Patterns).

## Design Patterns

### Singleton

- Creates an object that can only be instantiated once, useful for global access.
- **Example:** `Settings` class ensuring only one instance exists.

```typescript
class Settings {
  static instance: Settings;
  public readonly mode = 'dark';
  private constructor() {}
  static getInstance(): Settings {
    if (!Settings.instance) {
      Settings.instance = new Settings();
    }
    return Settings.instance;
  }
}
const settings = Settings.getInstance();
```

### Prototype

- Allows cloning of objects rather than extending via inheritance.
- **Example:** Cloning a `zombie` object to create new instances.

```typescript
const zombie = {
  eatBrains() {
    return 'yum 🧠';
  },
};
const chad = Object.create(zombie, { name: { value: 'chad' } });
const babyChad = Object.create(chad, { baby: { value: true } });
```

### Factory

- Creates objects without exposing creation logic.
- **Example:** `ButtonFactory` creating buttons based on OS.

```typescript
class ButtonFactory {
  createButton(os: string): IOSButton | AndroidButton {
    // Creation logic based on OS
  }
}
const factory = new ButtonFactory();
const btn1 = factory.createButton(os);
```

### Builder

- Constructs complex objects step by step using method chaining.
- **Example:** Building a `HotDog` object with optional toppings.

```typescript
class HotDog {
  constructor(
    public bread: string,
    public ketchup?: boolean,
    public mustard?: boolean,
    public kraut?: boolean
  ) {}
  addKetchup() {
    this.ketchup = true;
    return this;
  }
  addMustard() {
    this.mustard = true;
    return this;
  }
  addKraut() {
    this.kraut = true;
    return this;
  }
}
const myLunch = new HotDog('gluten free').addKetchup().addMustard().addKraut();
```

## Structural Patterns

### Facade

- Provides a simplified API for a subsystem.
- **Example:** `House` class hiding complexities of plumbing and electrical systems.

```typescript
class House {
  turnOnSystems() {
    /* Controls plumbing and electrical systems */
  }
  shutDown() {
    /* Turns off systems */
  }
}
const client = new House();
client.turnOnSystems();
client.shutDown();
```

### Proxy

- Controls access to an object, intercepts and modifies data.
- **Example:** Using a `Proxy` to track and update data changes.

```typescript
const reactive = new Proxy(original, {
  get(target, key) {
    /* Track access */
  },
  set(target, key, value) {
    /* Update UI */
  },
});
```

## Behavioral Patterns

### Iterator

- Traverses a collection of elements.
- **Example:** Custom `range` function for iterating over a range of numbers.

```typescript
function range(start: number, end: number, step = 1) {
  /* Returns an iterator for a range */
}
for (const n of range(0, 100, 5)) {
  console.log(n);
}
```

### Observer

- Notifies interested parties of state changes.
- **Example:** Using `rxjs` to broadcast news updates to subscribers.

```typescript
const news = new Subject();
const tv1 = news.subscribe((v) => console.log(v + ' via Den TV'));
news.next('Breaking news: ');
```

### Mediator

- Acts as a middle layer between communicating objects.
- **Example:** Using Express middleware to handle requests.

```typescript
function mediator(req, res, next) {
  /* Middleware logic */
}
app.use(mediator);
```

### State

- Encapsulates object state for independent access and modification.
- **Example:** Implementing different states for a `Human` object.

```typescript
interface State {
  think(): string;
}
class HappyState implements State {
  think() {
    return 'I am happy 🙂';
  }
}
class SadState implements State {
  think() {
    return 'I am sad 🙁';
  }
}
class Human {
  state: State;
  changeState(state) {
    /* Changes the state of the human */
  }
  think() {
    return this.state.think();
  }
}
```

These patterns provide solutions to common design problems, enhancing code flexibility, maintainability, and scalability.

---

[_Dominque L.D. Cox_](https://github.com/larohndale)
