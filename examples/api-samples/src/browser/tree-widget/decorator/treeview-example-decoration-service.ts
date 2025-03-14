// *****************************************************************************
// Copyright (C) 2025 Stefan Winkler and others.
//
// This program and the accompanying materials are made available under the
// terms of the Eclipse Public License v. 2.0 which is available at
// http://www.eclipse.org/legal/epl-2.0.
//
// This Source Code may also be made available under the following Secondary
// Licenses when the conditions for such availability set forth in the Eclipse
// Public License v. 2.0 are satisfied: GNU General Public License, version 2
// with the GNU Classpath Exception which is available at
// https://www.gnu.org/software/classpath/license.html.
//
// SPDX-License-Identifier: EPL-2.0 OR GPL-2.0-only WITH Classpath-exception-2.0
// *****************************************************************************

import { ContributionProvider } from '@theia/core';
import { AbstractTreeDecoratorService, TreeDecorator } from '@theia/core/lib/browser';
import { inject, injectable, named } from '@theia/core/shared/inversify';

export const TreeviewExampleDecorator = Symbol('TreeviewExampleDecorator');

@injectable()
export class TreeviewExampleDecorationService extends AbstractTreeDecoratorService {
    constructor(@inject(ContributionProvider) @named(TreeviewExampleDecorator) protected readonly contributions: ContributionProvider<TreeDecorator>) {
        super(contributions.getContributions());
    }
}
