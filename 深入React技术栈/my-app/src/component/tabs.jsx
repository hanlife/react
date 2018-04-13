import React, {Component, cloneElement} from "react";
import PropTypes from 'prop-types';
import classnames from "classnames";
import './tabs.scss';

class Tabs extends Component {
    static propTypes = {
        // 主节点增加可选class
        className: PropTypes.string,
        // class前缀
        classPrefix: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]),
        // 默认激活索引 组件内更新
        defaultActiveIndex: PropTypes.number,
        // 默认激活索引 组件外更新
        activeIndex: PropTypes.number,
        // 切换回调
        onChange: PropTypes.func
    };

    static defaultProps = {
        classPrefix: 'tabs',
        onChange: () => {}
    };

    constructor(props) {
        super(props);
        // 绑定事件
        this.handleTabClick = this
            .handleTabClick
            .bind(this);

        const currProps = this.props;

        let activeIndex;
        // 初始化acticeIndex state
        if ("activeIndex" in currProps) {
            activeIndex = currProps.activeIndex;
        } else if ("defaultActiveIndex" in currProps) {
            activeIndex = currProps.defaultActiveIndex;
        }
        console.log(this)
        this.state = {
            activeIndex,
            prevIndex: activeIndex
        }
    };

    componentWillReceiveProps(nextProps) {
        // 如果props 传入 activeIndex ，则直接更新
        if ('activeIndex' in nextProps) {
            this.setState({activeIndex: nextProps.activeIndex})
        }
    };

    handleTabClick(activeIndex) {
        const prevIndex = this.state.activeIndex;

        // 如果当前activeIndex 与传入activeIndex不一致，并且props中存在defaultActiveIndex，则更新
        if (this.state.activeIndex !== activeIndex && 'defaultActiveIndex' in this.props) {
            this.setState({activeIndex, prevIndex});
            this
                .props
                .onChange({activeIndex, prevIndex});
        }
    };

    renderTabNav() {
        const {classPrefix, children} = this.props;

        return (<TabNav
            key="tabBar"
            classPrefix={classPrefix}
            onTabClick={this.handleTabClick}
            panels={children}
            activeIndex={this.state.activeIndex}/>)
    };

    renderTabContent() {
        const {classPrefix, children} = this.props;
        return (<TabContent
            key="tabcontent"
            classPrefix={classPrefix}
            panels={children}
            activeIndex={this.state.activeIndex}/>)
    };

    render() {
        const {className} = this.props;
        // classname 用于合并class
        const classes = classnames(className, 'ui-tabs');

        return (
            <div className={classes}>
                {this.renderTabNav()}
                {this.renderTabContent()}
            </div>
        )
    }

}

class TabNav extends Component {
    static propTypes = {
        classPrefix: PropTypes.string,
        panels: PropTypes.node,
        activeIndex: PropTypes.number
    };

    getTabs() {
        const {panels, classPrefix, activeIndex} = this.props;

        return React.Children.map(panels, (child) => {
                if (!child) {
                    return;
                }
                const order = parseInt(child.props.order, 10);
                // 利用class 控制显示隐藏
                let classes = classnames({
                    [`${classPrefix}-tab`]: true,
                    [`${classPrefix}-active`]: activeIndex === order,
                    [`${classPrefix}-disabled`]: child.props.disabled
                })

                let events = {};
                if (!child.props.disabled) {
                    events = {
                        onClick: this
                            .props
                            .onTabClick
                            .bind(this, order)
                    };
                }
                const ref = {};
                if (activeIndex === order) {
                    ref.ref = 'activeTab';
                }
                return (
                    <li
                        role="tab"
                        aria-disabled={child.props.disabled
                        ? 'true'
                        : 'false'}
                        aria-selected={activeIndex === order
                        ? 'true'
                        : 'false'}
                        {...events}
                        className={classes}
                        key={order}
                        {...ref}>
                        {child.props.tab}
                    </li>
                );
            });
    }
    render() {
        const {classPrefix} = this.props;

        const rootClasses = classnames({
            [`${classPrefix}-bar`]: true
        })
        const classes = classnames({
            [`${classPrefix}-nav`]: true
        })

        return (
            <div className={rootClasses} role="tablist">
                <ul className={classes}>
                    {this.getTabs()}
                </ul>
            </div>
        )
    }
}

class TabContent extends Component {
    static propTypes = {
        classPrefix: PropTypes.string,
        panels: PropTypes.node,
        activeIndex: PropTypes.number
    }

    getTabPanes() {
        const {classPrefix, activeIndex, panels} = this.props;

        return React
            .Children
            .map(panels, (child) => {
                if (!child) {
                    return;
                }
                const order = parseInt(child.props.order, 10);
                const isActive = activeIndex === order;

                return React.cloneElement(child, {
                    classPrefix,
                    isActive,
                    children: child.props.children,
                    key: `tabpane-${order}`
                });
            });
    }
    render() {
        const {classPrefix} = this.props;

        const classes = classnames({
            [`${classPrefix}-content`]: true
        });
        return (
            <div className={classes}>
                {this.getTabPanes()}
            </div>
        )
    }
}

class TabPane extends Component {
    static propTypes = {
        tab: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
        order: PropTypes.string.isRequired,
        disable: PropTypes.bool,
        isActive: PropTypes.bool
    }

    render() {
        console.log(this.props)
        const {classPrefix, className, isActive, children} = this.props;

        const classes = classnames({
            [className]: className,
            [`${classPrefix}-panel`]: true,
            [`${classPrefix}-active`]: isActive
        });

        return (
            <div role="tabpanel" className={classes} aria-hidden={!isActive}>
                {children}
            </div>
        )
    };
}

export {Tabs, TabNav, TabContent, TabPane}