declare namespace Form.teamtemplate.Main {
  namespace TeamTemplate {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "Access Rights"): Xrm.PageSection;
        get(name: "Description"): Xrm.PageSection;
        get(name: "General"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "defaultaccessrightsmask"): Xrm.NumberAttribute;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "objecttypecode"): Xrm.NumberAttribute;
      get(name: "teamtemplatename"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "defaultaccessrightsmask"): Xrm.NumberControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "objecttypecode"): Xrm.NumberControl;
      get(name: "teamtemplatename"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface TeamTemplate extends Xrm.PageBase<TeamTemplate.Attributes,TeamTemplate.Tabs,TeamTemplate.Controls> {
    getAttribute(attributeName: "defaultaccessrightsmask"): Xrm.NumberAttribute;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "objecttypecode"): Xrm.NumberAttribute;
    getAttribute(attributeName: "teamtemplatename"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "defaultaccessrightsmask"): Xrm.NumberControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "objecttypecode"): Xrm.NumberControl;
    getControl(controlName: "teamtemplatename"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
