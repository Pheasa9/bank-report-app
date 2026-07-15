"use client";

import { useMemo } from "react";
import type { NavItem, NavGroup } from "@/types";


/**
 * Filter navigation items
 * No authentication / Clerk
 * All navigation items are visible
 */
export function useFilteredNavItems(items: NavItem[]) {

  return useMemo(() => {

    return items
      .filter(() => true)
      .map((item) => {

        // Filter children recursively
        if (item.items && item.items.length > 0) {

          return {
            ...item,
            items: item.items.filter(() => true),
          };

        }

        return item;

      });

  }, [items]);

}


/**
 * Filter navigation groups
 * No RBAC / Permission checking
 * Returns all groups with available items
 */
export function useFilteredNavGroups(groups: NavGroup[]) {

  const allItems = useMemo(
    () =>
      groups.flatMap(
        (group) => group.items
      ),
    [groups]
  );


  const filteredItems =
    useFilteredNavItems(allItems);



  return useMemo(() => {

    return groups
      .map((group) => {

        return {
          ...group,

          items: filteredItems.filter(
            (item) =>
              group.items.some(
                (groupItem) =>
                  groupItem.title === item.title
              )
          ),

        };

      })
      .filter(
        (group) =>
          group.items.length > 0
      );


  }, [groups, filteredItems]);

}