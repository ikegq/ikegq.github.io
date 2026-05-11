import{_ as n,o as s,c as a,d as t}from"./app-1e688430.js";const e={},p=t(`<h3 id="伪类" tabindex="-1"><a class="header-anchor" href="#伪类" aria-hidden="true">#</a> 伪类:</h3><p>:hover :active :focus :visited :link :root :target :not() :first-child :last-child :nth-child(n) :nth-last-child(n) :only-child :first-of-type :last-of-type :nth-of-type(n) :nth-last-of-type(n) :checked :disabled :enabled :empty :valid :invalid :out-of-range :in-range :optional :required :read-only :read-write :lang :dir()</p><h3 id="伪元素" tabindex="-1"><a class="header-anchor" href="#伪元素" aria-hidden="true">#</a> 伪元素::</h3><p>::before ::after ::first-line ::first-letter ::selection</p><h3 id="not-is-where-has" tabindex="-1"><a class="header-anchor" href="#not-is-where-has" aria-hidden="true">#</a> :not() :is() :where() :has()</h3><h4 id="is" tabindex="-1"><a class="header-anchor" href="#is" aria-hidden="true">#</a> :is()</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.parent .box1</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">.parent .box2</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token selector">.parent :is(.box1, .box2)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token selector">.box1 a</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">.box2 a</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token selector">:is(.box1, .box2) a</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token selector">.parent .box1 a</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">.parent .box2 a</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token selector">.parent :is(.box1, .box2) a</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token selector">.box1 a</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">.box1 span</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">.box2 a</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">.box2 span</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token selector">:is(.box1, .box2) :is(a, span)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:is() 自身特异性0-0-0，但不妨碍is括号内数据的特异性，当有多个不同的特异性时，取最高的优先级，就算这个优先级并没有被使用</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">#box :is(.parent, #a)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#box .parent</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>红色文字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:is() 安全性，普通css中，任何一个选择器失效，则整个列表将视为无效。使用is()，可以避免这种情况。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">:valid, :unsupported</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">/* 在不支持 :unsupported 浏览器中，:valid 样式也不会生效 */</span>


<span class="token selector">:is(:valid, :unsupported)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">/* 就算浏览器不支持 :unsupported ，:valid 样式仍然生效 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="where" tabindex="-1"><a class="header-anchor" href="#where" aria-hidden="true">#</a> :where()</h4><p>:where() 特异性为0-0-0，会妨碍内部特异性，括号内无论任何选择器，特异性都为0-0-0</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">#box :where(.parent, #a)</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">#box .parent</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>蓝色文字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),l=[p];function c(i,o){return s(),a("div",null,l)}const d=n(e,[["render",c],["__file","24031301.html.vue"]]);export{d as default};
