/// <reference path="form-namespace.ts" />

namespace MyFormNameSpace {
    class MyForm {
        private type: FormType = 'inline'
        private state: FormState = 'active'
    
        constructor(public email: string) {}
    
        getInfo(): FormInfo {
            return {
                type: this.type,
                state: this.state
            }
        }
    }
    
    const myForm = new MyForm('test@mail.com');
}
