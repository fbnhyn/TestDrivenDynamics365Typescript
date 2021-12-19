declare namespace Form.msfp_fileresponse.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msfp_file1"): Xrm.Attribute<any>;
      get(name: "msfp_file10"): Xrm.Attribute<any>;
      get(name: "msfp_file2"): Xrm.Attribute<any>;
      get(name: "msfp_file3"): Xrm.Attribute<any>;
      get(name: "msfp_file4"): Xrm.Attribute<any>;
      get(name: "msfp_file5"): Xrm.Attribute<any>;
      get(name: "msfp_file6"): Xrm.Attribute<any>;
      get(name: "msfp_file7"): Xrm.Attribute<any>;
      get(name: "msfp_file8"): Xrm.Attribute<any>;
      get(name: "msfp_file9"): Xrm.Attribute<any>;
      get(name: "msfp_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msfp_file1"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "msfp_file10"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "msfp_file2"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "msfp_file3"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "msfp_file4"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "msfp_file5"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "msfp_file6"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "msfp_file7"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "msfp_file8"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "msfp_file9"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "msfp_name"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msfp_file1"): Xrm.Attribute<any>;
    getAttribute(attributeName: "msfp_file10"): Xrm.Attribute<any>;
    getAttribute(attributeName: "msfp_file2"): Xrm.Attribute<any>;
    getAttribute(attributeName: "msfp_file3"): Xrm.Attribute<any>;
    getAttribute(attributeName: "msfp_file4"): Xrm.Attribute<any>;
    getAttribute(attributeName: "msfp_file5"): Xrm.Attribute<any>;
    getAttribute(attributeName: "msfp_file6"): Xrm.Attribute<any>;
    getAttribute(attributeName: "msfp_file7"): Xrm.Attribute<any>;
    getAttribute(attributeName: "msfp_file8"): Xrm.Attribute<any>;
    getAttribute(attributeName: "msfp_file9"): Xrm.Attribute<any>;
    getAttribute(attributeName: "msfp_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msfp_file1"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "msfp_file10"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "msfp_file2"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "msfp_file3"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "msfp_file4"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "msfp_file5"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "msfp_file6"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "msfp_file7"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "msfp_file8"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "msfp_file9"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "msfp_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
