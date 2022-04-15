# Scope

This project provides a POC with focus on client side Test Driven Development in a Dynamics 365 context.

It contains all standard entities, forms and views as ``d.ts`` files (generated via XrmDefinitelyTyped) and some sample businesslogic and unittests.

Jest is used as testing- and mockingframework.
xrm-mock is used to generate a mocked formcontext.

# Get Started

1. Run npm install 
2. Press F5 and have debugging
3. Optional add a ``XrmDefinitely.exe.config`` file to add ``d.ts`` files for your dynamics tenant