/*
Factory:

A method or function that creates an object, or a set of objects, without exposing creation logic to the client
*/

class IOSButton { }
class AndroidButton { }
const os: String = '';
// Without Factory
const button1 = os === 'ios' ? new IOSButton() : new AndroidButton();
const button2 = os === 'ios' ? new IOSButton() : new AndroidButton();

class ButtonFactory {
    createButton(os: String): IOSButton | AndroidButton {
        if (os === 'ios') {
            return new IOSButton();
        } else {
            return new AndroidButton();
        }
    }
}

// With Factory 
const factory = new ButtonFactory();
const btn1 = factory.createButton(os);
const btn2 = factory.createButton(os);