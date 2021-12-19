declare namespace Form.characteristic.Main {
  namespace SkillMainForm {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "characteristictype"): Xrm.OptionSetAttribute<bookableresourcecharacteristictype>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "SkilledUsers"): Xrm.SubGridControl<"bookableresourcecharacteristic">;
      get(name: "WebResource_help"): Xrm.WebResourceControl;
      get(name: "characteristictype"): Xrm.OptionSetControl<bookableresourcecharacteristictype>;
      get(name: "description"): Xrm.StringControl;
      get(name: "name"): Xrm.StringControl;
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
  interface SkillMainForm extends Xrm.PageBase<SkillMainForm.Attributes,SkillMainForm.Tabs,SkillMainForm.Controls> {
    getAttribute(attributeName: "characteristictype"): Xrm.OptionSetAttribute<bookableresourcecharacteristictype>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "SkilledUsers"): Xrm.SubGridControl<"bookableresourcecharacteristic">;
    getControl(controlName: "WebResource_help"): Xrm.WebResourceControl;
    getControl(controlName: "characteristictype"): Xrm.OptionSetControl<bookableresourcecharacteristictype>;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
