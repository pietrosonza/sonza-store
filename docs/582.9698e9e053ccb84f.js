"use strict";(self.webpackChunkpy_store=self.webpackChunkpy_store||[]).push([[582],{7582:(v,u,a)=>{a.r(u),a.d(u,{CarrinhoModule:()=>x});var l=a(6895),s=a(9541),n=a(1571),d=a(8902),c=a(433);function g(t,e){if(1&t){const o=n.EpF();n.TgZ(0,"li"),n._UZ(1,"img",6),n.TgZ(2,"p"),n._uU(3),n.qZA(),n.TgZ(4,"p"),n._uU(5),n.ALo(6,"currency"),n.qZA(),n.TgZ(7,"label"),n._uU(8," Quantidade: "),n.TgZ(9,"input",7),n.NdJ("ngModelChange",function(i){const h=n.CHM(o).$implicit;return n.KtG(h.quantidade=i)})("change",function(){n.CHM(o);const i=n.oxw(2);return n.KtG(i.calcularTotal())}),n.qZA()(),n.TgZ(10,"button",8),n.NdJ("click",function(){const p=n.CHM(o).$implicit,h=n.oxw(2);return n.KtG(h.removeProdutoCarrinho(p.id))}),n._UZ(11,"i",9),n.qZA()()}if(2&t){const o=e.$implicit;n.xp6(1),n.Q6J("src",o.imagem,n.LSH),n.xp6(2),n.hij(" ",o.descricao," "),n.xp6(2),n.hij(" Pre\xe7o: ",n.xi3(6,4,o.preco,"BRL")," "),n.xp6(4),n.Q6J("ngModel",o.quantidade)}}function C(t,e){if(1&t){const o=n.EpF();n.TgZ(0,"div")(1,"ul"),n.YNc(2,g,12,7,"li",3),n.qZA(),n.TgZ(3,"h2",4),n._uU(4),n.ALo(5,"currency"),n.qZA(),n.TgZ(6,"button",5),n.NdJ("click",function(){n.CHM(o);const i=n.oxw();return n.KtG(i.comprar())}),n._uU(7,"Comprar"),n.qZA()()}if(2&t){const o=n.oxw();n.xp6(2),n.Q6J("ngForOf",o.itensCarrinho),n.xp6(2),n.hij(" Total: ",n.xi3(5,2,o.total,"BRL")," ")}}function m(t,e){1&t&&(n.TgZ(0,"div",10)(1,"h2"),n._uU(2,"SEU CARRINHO EST\xc1 VAZIO"),n.qZA(),n.TgZ(3,"h4"),n._uU(4,"Quando adicionares algo ao teu carrinho, vai aparecer aqui. Pronto para come\xe7ar?"),n.qZA(),n.TgZ(5,"button",11),n._uU(6,"Come\xe7ar --\x3e"),n.qZA()())}const _=[{path:"",component:(()=>{class t{constructor(o,r){this.carrinhoService=o,this.router=r,this.itensCarrinho=[],this.total=0}ngOnInit(){this.itensCarrinho=this.carrinhoService.obtemCarrinho(),this.calcularTotal()}calcularTotal(){this.total=this.itensCarrinho.reduce((o,r)=>o+r.preco*r.quantidade,0)}removeProdutoCarrinho(o){this.itensCarrinho=this.itensCarrinho.filter(r=>r.id!==o),this.carrinhoService.removerProdutoCarrinho(o),this.calcularTotal()}comprar(){alert("Parab\xe9ns! Compra efetuada com sucesso."),this.carrinhoService.limparCarrinho(),this.router.navigate(["produtos"])}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(d.e),n.Y36(s.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-carrinho"]],decls:5,vars:2,consts:[[1,"cart-title"],[4,"ngIf","ngIfElse"],["semProduto",""],[4,"ngFor","ngForOf"],[1,"cart-total"],[1,"buy-button",3,"click"],[3,"src"],["type","number","min","1",3,"ngModel","ngModelChange","change"],[1,"remove-button",3,"click"],[1,"fa-solid","fa-xmark"],[1,"carrinho-vazio__container"],["routerLink","/produtos",1,"button-carrinho-vazio"]],template:function(o,r){if(1&o&&(n.TgZ(0,"h2",0),n._uU(1,"Carrinho"),n.qZA(),n.YNc(2,C,8,5,"div",1),n.YNc(3,m,7,0,"ng-template",null,2,n.W1O)),2&o){const i=n.MAs(4);n.xp6(2),n.Q6J("ngIf",r.itensCarrinho.length>0)("ngIfElse",i)}},dependencies:[l.sg,l.O5,s.rH,c.Fj,c.wV,c.JJ,c.qQ,c.On,l.H9],styles:[".cart-title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px}li[_ngcontent-%COMP%]{display:flex;box-shadow:#64646f33 0 7px 29px;border-radius:15px;overflow:hidden;margin:10px;height:100px;align-items:center;justify-content:space-between}img[_ngcontent-%COMP%]{width:100px;height:100px;display:block}.remove-button[_ngcontent-%COMP%]{background-color:#000;border:none;color:#fff;padding:20px;height:100%;transition:.2s all}.remove-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}.cart-total[_ngcontent-%COMP%]{font-size:24px;color:var(--gray);font-weight:700;padding:8px 0;margin:10px}input[_ngcontent-%COMP%]{width:30px;text-align:center}.buy-button[_ngcontent-%COMP%]{border:none;width:150px;height:35px;color:#fff;background-color:#000;border-radius:45px}.buy-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}.carrinho-vazio__container[_ngcontent-%COMP%]{padding:40px 80px}.carrinho-vazio__container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30PX;font-weight:900}.carrinho-vazio__container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{padding:10px 0 0;font-size:18px}.button-carrinho-vazio[_ngcontent-%COMP%]{height:50px;width:150px;font-size:18px;font-weight:600;color:#fff;background-color:#000;border-style:solid;border-color:#fff;cursor:pointer}"]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[s.Bz.forChild(_),s.Bz]}),t})(),x=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[l.ez,f,c.u5]}),t})()}}]);