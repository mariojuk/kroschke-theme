<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

// @codingStandardsIgnoreFile

/** @var \Magento\Customer\Block\Account\Dashboard\Info $block */
?>
<div class="block block-dashboard-info">
    <div class="block-title"><strong><?= $block->escapeHtml(__('Account Information')) ?></strong></div>
    <div class="block-content">
        <div class="box box-information">
            <strong class="box-title">
                <span><?= $block->escapeHtml(__('Contact Information')) ?></span>
            </strong>
            <div class="box-content">
                <p>
                    <?= $block->escapeHtml($block->getName()) ?><br>
                    <?= $block->escapeHtml($block->getCustomer()->getEmail()) ?><br>
                </p>
            </div>
            <div class="box-actions">
                <a class="action edit" href="<?= $block->escapeUrl($block->getUrl('customer/account/edit')) ?>">
                    <span><?= $block->escapeHtml(__('Edit')) ?></span>
                </a>
                <a href="<?= $block->escapeUrl($block->getChangePasswordUrl()) ?>" class="action change-password">
                    <?= $block->escapeHtml(__('Change Password')) ?>
                </a>
            </div>
        </div>
    </div>
</div>
