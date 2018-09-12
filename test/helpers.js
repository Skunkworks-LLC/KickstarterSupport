var expect = require('jest').expect;
var enzyme = require('enzyme');
var mount = enzyme.mount;
var render = enzyme.render;
var shallow = enzyme.shallow;
var configure = enzyme.configure;


configure({ adapater: new Adapter() });

modules.export = {
    test: {
        expect,
        mount,
        render,
        shallow
    }
};

//How to use enzyme to test react https://www.robinwieruch.de/react-testing-tutorial/#react-enzyme-test-setup