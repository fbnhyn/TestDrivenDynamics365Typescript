declare namespace Form.template.Quick {
  namespace Templategallerypropertiesform {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ispersonal"): Xrm.OptionSetAttribute<boolean>;
      get(name: "languagecode"): Xrm.OptionSetAttribute<number>;
      get(name: "templatetypecode"): Xrm.OptionSetAttribute<number>;
      get(name: "title"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "languagecode"): Xrm.OptionSetControl<number>;
      get(name: "permissionlevel"): Xrm.OptionSetControl<boolean>;
      get(name: "templatetypecode"): Xrm.OptionSetControl<number>;
      get(name: "title"): Xrm.StringControl;
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
  interface Templategallerypropertiesform extends Xrm.PageBase<Templategallerypropertiesform.Attributes,Templategallerypropertiesform.Tabs,Templategallerypropertiesform.Controls> {
    getAttribute(attributeName: "ispersonal"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "languagecode"): Xrm.OptionSetAttribute<number>;
    getAttribute(attributeName: "templatetypecode"): Xrm.OptionSetAttribute<number>;
    getAttribute(attributeName: "title"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "languagecode"): Xrm.OptionSetControl<number>;
    getControl(controlName: "permissionlevel"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "templatetypecode"): Xrm.OptionSetControl<number>;
    getControl(controlName: "title"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
