// This file is part of the "jQuery.Syntax" project, and is distributed under the MIT License.
// Copyright (c) 2011 Samuel G. D. Williams. <http://www.oriontransfer.co.nz>

Syntax.brushes.dependency("scala","xml");
Syntax.register("scala",function(a){a.push("abstract do finally import object return trait var case catch class else extends for forSome if lazy match new override package private sealed super try type while with yield def final implicit protected throw val".split(" "),{klass:"keyword"});a.push("_ : = => <- <: <% >: # @".split(" "),{klass:"operator"});a.push(["this","null","true","false"],{klass:"constant"});a.push({pattern:/"""[\s\S]*?"""/g,klass:"string"});a.push(Syntax.lib.doubleQuotedString);
a.push({pattern:/(?:def\s+|\.)([a-z_][a-z0-9_]+)/gi,matches:Syntax.extractMatches({klass:"function"})});a.push(Syntax.lib.camelCaseType);a.push(Syntax.lib.cStyleFunction);a.push(Syntax.lib.cStyleComment);a.push(Syntax.lib.cppStyleComment);a.derives("xml")});
