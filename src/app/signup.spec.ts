import {TestBed} from "@angular/core/testing"
import { SignUpComponent } from "../app/login/signup.component";
import { MySignComponent } from "./shared/mysign.component";
import { ReverseTextPipe } from "./pipetransforms/reversetext.pipe";

describe("Sign up Component Testing", () => {
    beforeEach(()=> {
        TestBed.configureTestingModule({
            declarations: [SignUpComponent, MySignComponent]
        })
    });
    it("should create instance of signup component",() =>{
        TestBed.configureTestingModule({
            declarations: [SignUpComponent]
        });
    let f = TestBed.createComponent(SignUpComponent)
            expect(f).toBeDefined()
    });
    it("should verify data member",()=> {
        let f = TestBed.createComponent(SignUpComponent);
        let obj = f.componentInstance;
        expect(obj.signUpHeading).toEqual("Sign Up")
    });
    it("should verify reverse pipe", () => {
        let p=new ReverseTextPipe();
        expect(p.transform("ABCD")).toEqual("DCBA")
    })
})
